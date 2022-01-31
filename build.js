const fs = require('fs');

const template = fs.readFileSync('dkzhang-template.html', 'utf8');
const navbar = fs.readFileSync('dkzhang-navbar.html', 'utf8');
const style = fs.readFileSync('dkzhang-style.css', 'utf8');

const md = require('markdown-it')({
    html: true,       // allow HTML tags
    linkify: true,    // automatically convert URLs into links
    typographer: true // replace quotes with smart quotes
});

md.use(require('markdown-it-texmath'), {
    engine: require('katex'),
    delimiters: 'dollars',
    katexOptions: { macros: {
        "\\N": "{\\mathbb{N}}",
        "\\Z": "{\\mathbb{Z}}",
        "\\Q": "{\\mathbb{Q}}",
        "\\R": "{\\mathbb{R}}",
        "\\C": "{\\mathbb{C}}",
        "\\alg": "\\langle {#1} \\rangle",
        "\\vspan": "\\operatorname{span}",
        "\\aff": "\\operatorname{aff}",
        "\\va": "{\\mathbf{a}}",
        "\\vb": "{\\mathbf{b}}",
        "\\vc": "{\\mathbf{c}}",
        "\\vd": "{\\mathbf{d}}",
        "\\ve": "{\\mathbf{e}}",
        "\\vf": "{\\mathbf{f}}",
        "\\vg": "{\\mathbf{g}}",
        "\\vh": "{\\mathbf{h}}",
        "\\vi": "{\\mathbf{i}}",
        "\\vj": "{\\mathbf{j}}",
        "\\vk": "{\\mathbf{k}}",
        "\\vl": "{\\mathbf{l}}",
        "\\vm": "{\\mathbf{m}}",
        "\\vn": "{\\mathbf{n}}",
        "\\vo": "{\\mathbf{0}}",
        "\\vp": "{\\mathbf{p}}",
        "\\vq": "{\\mathbf{q}}",
        "\\vr": "{\\mathbf{r}}",
        "\\vs": "{\\mathbf{s}}",
        "\\vt": "{\\mathbf{t}}",
        "\\vu": "{\\mathbf{u}}",
        "\\vv": "{\\mathbf{v}}",
        "\\vw": "{\\mathbf{w}}",
        "\\vx": "{\\mathbf{x}}",
        "\\vy": "{\\mathbf{y}}",
        "\\vz": "{\\mathbf{z}}",
    }}
});

const mdc = require('markdown-it-container');

function addContainerType(name, regex, startTag, endTag) {
    md.use(mdc, name, {
        validate: function(params) {
            return params.trim().match(regex);
        },
        render: function(tokens, idx) {
            if (tokens[idx].nesting === 1) {
                return startTag + '\n';
            } else {
                return endTag + '\n';
            }
        }
    });
}

addContainerType('card', /^card$/, '<p><div class="card bg-light">', '</div></p>');
addContainerType('card-header', /^card-header$/, '<div class="card-header bg-dark text-white">', '</div>');
addContainerType('card-body', /^card-body$/, '<div class="card-body">', '</div>');
addContainerType('sans', /^sans$/, '<div class="sans">', '</div>');

function compileMarkdown(inputFile, title, debug, outputFile) {
    const input = fs.readFileSync(inputFile, "utf8");
    output = template.replace("{{{TITLE}}}", title);
    output = output.replace("{{{STYLE}}}", style);
    output = output.replace("{{{NAVBAR}}}", navbar);
    output = output.replace("{{{CONTENT}}}", md.render(input));
    if (debug) {
        output = output.replace("{{{DEBUG}}}", '<script type="text/javascript" src="https://livejs.com/live.js"></script>');
    } else {
        output = output.replace("{{{DEBUG}}}", "");
    }
    fs.writeFileSync(outputFile, output);
}

compileMarkdown("test.md", "Test", true, "output/test.html");
compileMarkdown("home.md", "David K. Zhang - Personal Website", true, "output/index.html");
