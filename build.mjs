import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createHash } from 'crypto';
import markdownIt from 'markdown-it';
import markdownItContainer from 'markdown-it-container';
import katex from 'katex';

///////////////////////////////////////////////////////////////// TEMPLATE FILES

const DKZHANG_STYLE = readFileSync("templates/dkzhang-style.css", 'utf8');
const DKZHANG_NAVBAR = readFileSync("templates/dkzhang-navbar.html", 'utf8');
const DKZHANG_TEMPLATE = readFileSync("templates/dkzhang-template.html", 'utf8')
    .replace("{{{STYLE}}}", DKZHANG_STYLE)
    .replace("{{{NAVBAR}}}", DKZHANG_NAVBAR);
const DKZHANG_MACROS = JSON.parse(readFileSync("templates/dkzhang-macros.json", 'utf8'));
const HASHES = JSON.parse(readFileSync("hashes.json", 'utf8'));
const FORCE = process.argv.includes("--force");

//////////////////////////////////////////////////////////////////// MARKDOWN-IT

const md = markdownIt({ html: true, linkify: true, typographer: true });

////////////////////////////////////////////////////////// MARKDOWN-IT-CONTAINER

function addContainer(name, classes) {
    md.use(markdownItContainer, name, {
        validate: params => params.trim() === name,
        render: (tokens, i) => tokens[i].nesting === 1
            ? `<div class="${classes}">\n` : "</div>\n"
    });
}

addContainer("card", "card bg-light border-dark");
addContainer("card-header", "card-header bg-dark text-white");
addContainer("card-body", "card-body");

/////////////////////////////////////////////////////////////////// KATEX PARSER

function addKatexInlineRule(regex) {
    md.inline.ruler.before("escape", "math_inline", (state, silent) => {
        regex.lastIndex = state.pos;
        const match = regex.exec(state.src);
        if (match === null) return false;
        if (!silent) {
            const token = state.push("math_inline", "math", 0);
            token.content = match[1];
        }
        state.pos = regex.lastIndex;
        return true;
    });
}

function findLineIndex(state, startLine, endLine, charIndex) {
    for (let i = startLine; i < endLine; ++i) {
        const startIndex = state.bMarks[i] + state.tShift[i];
        if (startIndex <= charIndex && charIndex <= state.eMarks[i]) {
            return i;
        }
    }
}

function addKatexBlockRule(regex) {
    md.block.ruler.before("fence", "math_block",
        (state, startLine, endLine, silent) => {
            regex.lastIndex =
                state.bMarks[startLine] + state.tShift[startLine];
            const match = regex.exec(state.src);
            if (match === null) return false;
            if (!silent) {
                const lastLine = findLineIndex(
                    state, startLine, endLine, regex.lastIndex - 1
                );
                const oldParentType = state.parentType;
                const oldLineMax = state.lineMax;
                state.lineMax = lastLine;
                state.parentType = "math";
                let token = state.push("math_block", "math", 0);
                token.block = true;
                token.content = match[1];
                token.map = [startLine, lastLine + 1];
                state.parentType = oldParentType;
                state.lineMax = oldLineMax;
                state.line = lastLine + 1;
            }
            return true;
        }
    );
}

addKatexInlineRule(/\$((?:[^\s\\])|(?:\S.*?[^\s\\]))\$/gy);
addKatexInlineRule(/\\\((.+?)\\\)/gy);
addKatexBlockRule(/\\\[([\s\S]+?)\\\]/gmy);
addKatexBlockRule(/\${2}([^$]*?[^\\])\${2}/gmy);

///////////////////////////////////////////////////////////////// KATEX RENDERER

function katexRenderer(displayMode) {
    return (tokens, i) => katex.renderToString(tokens[i].content, {
        displayMode, macros: DKZHANG_MACROS, strict: true, throwOnError: false
    });
}

md.renderer.rules.math_inline = katexRenderer(false);
md.renderer.rules.math_block = katexRenderer(true);

////////////////////////////////////////////////////////////////// BUILD WEBSITE

function preprocessMarkdown(string, date) {
    const result = [];
    let codeBlock = false;
    for (const line of string.split('\n')) {
        if (/^\s*```/.test(line)) { codeBlock = !codeBlock; }
        if (codeBlock) { result.push(line); continue; }
        if (/^\s*\\\[|^\s*\$\$/.test(line)) { result.push(""); }
        result.push(line
            .replaceAll("&qed;", `<span class="float-end">&#8718;</span>`)
            .replaceAll('&today;', date));
    }
    return result.join('\n');
}

function compilePage(inputFile, title, outputFile) {
    const input = readFileSync(inputFile, "utf8").replaceAll("\r\n", "\n");
    const hash = createHash('sha384').update(input).digest('hex');
    if ((!FORCE) && (HASHES[inputFile].hash === hash)) {
        console.log("Skipped " + inputFile + " because it has not changed.");
    } else {
        const startTime = Date.now();
        const date = (FORCE && (inputFile in HASHES)) ?
            HASHES[inputFile].date :
            (new Date()).toISOString().split('T')[0];
        const output = DKZHANG_TEMPLATE
            .replace("{{{TITLE}}}", title)
            .replace("{{{CONTENT}}}", md.render(
                preprocessMarkdown(input, date)));
        const endTime = Date.now();
        writeFileSync("output/" + outputFile, output);
        if (existsSync("../dzhang314.github.com")) {
            writeFileSync("../dzhang314.github.com/" + outputFile, output);
        }
        HASHES[inputFile] = { "hash": hash, "date": date };
        console.log("Compiled " + inputFile + " to " + outputFile +
            " in " + (endTime - startTime) + "ms.");
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
compilePage("notes/functionalanalysis.md", "David K. Zhang - Functional Analysis", "functionalanalysis.html");
compilePage("notes/optimization.md", "David K. Zhang - Optimization", "optimization.html");
compilePage("notes/topology.md", "David K. Zhang - Topology", "topology.html");
compilePage("notes/misc.md", "David K. Zhang - Misc. Thoughts", "misc.html");
compilePage("notes/ecc.md", "David K. Zhang - Error-Correcting Codes", "ecc.html");
compilePage("notes/numbertheory.md", "David K. Zhang - Number Theory", "numbertheory.html");
compilePage("notes/booleanfunctions.md", "David K. Zhang - Boolean Function Complexity", "booleanfunctions.html");
compilePage("notes/websites.md", "David K. Zhang - Building Static Websites", "websites.html");
writeFileSync("hashes.json", JSON.stringify(HASHES, null, 4));
