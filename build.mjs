import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createHash } from 'crypto';
import markdownIt from 'markdown-it';
import markdownItContainer from 'markdown-it-container';
import katex from 'katex';

const DKZHANG_STYLE = readFileSync("templates/dkzhang-style.css", 'utf8');
const DKZHANG_NAVBAR = readFileSync("templates/dkzhang-navbar.html", 'utf8');
const DKZHANG_TEMPLATE = readFileSync("templates/dkzhang-template.html", 'utf8')
    .replace("{{{STYLE}}}", DKZHANG_STYLE)
    .replace("{{{NAVBAR}}}", DKZHANG_NAVBAR);
const DKZHANG_MACROS = JSON.parse(readFileSync("templates/dkzhang-macros.json", 'utf8'));
const HASHES = JSON.parse(readFileSync("hashes.json", 'utf8'));
const FORCE = process.argv.includes("--force");

const md = markdownIt({
    html: true,       // allow HTML tags
    linkify: true,    // automatically convert URLs into links
    typographer: true // replace quotes with smart quotes
});

function isKatexOpen(str, idx) {
    if (str[idx] === '$') {
        const prevChar = str[idx - 1];
        if (prevChar === undefined) { return true; }
        const code = prevChar.charCodeAt(0);
        return (code !== 0x5c && (code < 0x30 || code > 0x39));
    }
    return ((str[idx] === '\\' && str[idx + 1] === '('));
}

function isKatexClose(str, idx) {
    if (str[idx] === '$') {
        const nextChar = str[idx + 1];
        if (nextChar === undefined) { return true; }
        const code = nextChar.charCodeAt(0);
        return (code < 0x30 || code > 0x39);
    }
    return ((str[idx] === '\\' && str[idx + 1] === ')'));
}

function katexInlineRule(regex) {
    return function (state, silent) {
        if (!isKatexOpen(state.src, state.pos)) { return false; }
        regex.lastIndex = state.pos;
        const match = regex.exec(state.src);
        if (match === null) { return false; }
        if (!isKatexClose(state.src, regex.lastIndex - 1)) { return false; }
        if (!silent) {
            const token = state.push('math_inline', 'math', 0);
            token.content = match[1];
        }
        state.pos = regex.lastIndex;
        return true;
    }
}

function findLineIndex(state, startLine, endLine, charIndex) {
    for (let i = startLine; i < endLine; ++i) {
        const lineOffset = state.bMarks[i] + state.tShift[i];
        if (lineOffset <= charIndex && charIndex <= state.eMarks[i]) {
            return i;
        }
    }
}

function katexBlockRule(regex) {
    return function (state, startLine, endLine, silent) {
        regex.lastIndex = state.bMarks[startLine] + state.tShift[startLine];
        const match = regex.exec(state.src);
        if (match === null) { return false; }
        if (!silent) {
            const lastLine = findLineIndex(
                state, startLine, endLine, regex.lastIndex - 1
            );
            const oldParentType = state.parentType;
            const oldLineMax = state.lineMax;
            state.lineMax = lastLine;
            state.parentType = 'math';

            let token = state.push('math_block', 'math', 0);
            token.block = true;
            token.content = match[1];
            token.map = [startLine, lastLine + 1];

            state.parentType = oldParentType;
            state.lineMax = oldLineMax;
            state.line = lastLine + 1;
        }
        return true;
    }
}

md.inline.ruler.before('escape', 'math_inline', katexInlineRule(/\$((?:[^\s\\])|(?:\S.*?[^\s\\]))\$/gy));
md.inline.ruler.before('escape', 'math_inline', katexInlineRule(/\\\((.+?)\\\)/gy));
md.block.ruler.before('fence', 'math_block', katexBlockRule(/\\\[([\s\S]+?)\\\]/gmy));
md.block.ruler.before('fence', 'math_block', katexBlockRule(/\${2}([^$]*?[^\\])\${2}/gmy));

function katexRenderer(displayMode) {
    return function (tokens, idx) {
        return katex.renderToString(tokens[idx].content, {
            displayMode: displayMode,
            throwOnError: false,
            macros: DKZHANG_MACROS,
            strict: true
        });
    }
}

md.renderer.rules['math_inline'] = katexRenderer(false);
md.renderer.rules['math_block'] = katexRenderer(true);

function addContainerType(name, regex, startTag, endTag) {
    md.use(markdownItContainer, name, {
        validate: function (params) {
            return params.trim().match(regex);
        },
        render: function (tokens, idx) {
            if (tokens[idx].nesting === 1) {
                return startTag + '\n';
            } else {
                return endTag + '\n';
            }
        }
    });
}

addContainerType('card', /^card$/, '<div class="card bg-light border-dark">', '</div>');
addContainerType('card-header', /^card-header$/, '<div class="card-header bg-dark text-white">', '</div>');
addContainerType('card-body', /^card-body$/, '<div class="card-body">', '</div>');

function compileMarkdown(input, title) {
    return DKZHANG_TEMPLATE
        .replace("{{{TITLE}}}", title)
        .replace("{{{CONTENT}}}", md.render(input));
}

function compilePage(inputFile, title, outputFile) {
    const input = readFileSync(inputFile, "utf8").replaceAll("\r\n", "\n");
    const hash = createHash('sha384').update(input).digest('hex');
    if ((!FORCE) && (HASHES[inputFile].hash === hash)) {
        console.log("Skipping " + inputFile + " because it has not changed.");
    } else {
        console.log("Compiling " + inputFile + " to " + outputFile + "...");
        const today = (FORCE && (inputFile in HASHES)) ?
            HASHES[inputFile].date :
            (new Date()).toISOString().split('T')[0];
        const preprocessedInput = input
            .replaceAll('&qed;', '<span class="float-end">&#9633;</span>')
            .replaceAll('&today;', today);
        const output = compileMarkdown(preprocessedInput, title);
        writeFileSync("output/" + outputFile, output);
        if (existsSync("../dzhang314.github.com")) {
            writeFileSync("../dzhang314.github.com/" + outputFile, output);
        }
        HASHES[inputFile] = { "hash": hash, "date": today };
    }
}

compilePage("pages/home.md", "David K. Zhang - Personal Website", "index.html");
compilePage("pages/projects.md", "David K. Zhang - Projects", "projects.html");
compilePage("pages/publications.md", "David K. Zhang - Publications", "publications.html");
compilePage("pages/about.md", "David K. Zhang - About", "about.html");
compilePage("pages/contact.md", "David K. Zhang - Contact", "contact.html");
compilePage("notes/groups.md", "David K. Zhang - Group Theory", "groups.html");
compilePage("notes/rings.md", "David K. Zhang - Ring Theory", "rings.html");
compilePage("notes/linalg.md", "David K. Zhang - Linear Algebra", "linalg.html");
compilePage("notes/convex.md", "David K. Zhang - Convex Analysis", "convex.html");
compilePage("notes/optimization.md", "David K. Zhang - Optimization", "optimization.html");
compilePage("notes/topology.md", "David K. Zhang - Topology", "topology.html");
compilePage("notes/misc.md", "David K. Zhang - Misc. Thoughts", "misc.html");
compilePage("notes/ecc.md", "David K. Zhang - Error-Correcting Codes", "ecc.html");
compilePage("notes/legion.md", "David K. Zhang - Legion Programming", "legion.html");
compilePage("notes/numbertheory.md", "David K. Zhang - Number Theory", "numbertheory.html");
compilePage("notes/booleanfunctions.md", "David K. Zhang - Boolean Function Complexity", "booleanfunctions.html");
writeFileSync("hashes.json", JSON.stringify(HASHES, null, 4));
