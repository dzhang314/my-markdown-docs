const fs = require('fs');

const navbar = fs.readFileSync('dkzhang-navbar.html', 'utf8');

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

console.log("Reading input file...");
const input = fs.readFileSync("test.md", "utf8");
const title = "Title";
const debug = true;

console.log("Rendering output file...");

output = '<!DOCTYPE html>\n';
output += '<html lang="en-US">\n';
output += '<head>\n';
output += '<meta charset="UTF-8">\n';
output += '<meta name="viewport" content="width=device-width, initial-scale=1">\n';

output += '<title>' + title + '</title>\n';

output += '<link rel="stylesheet" ';
output += 'href="https://cdn.jsdelivr.net/npm/bootswatch@5.1.3/dist/litera/bootstrap.min.css" ';
output += 'integrity="sha384-jWh2BIV7iyVvMfp6tT2MlPY25mY5ow68HOIK/tjzAwX3LtHpnRcXovTJ3vNx4imh" ';
output += 'crossorigin="anonymous">\n';

// output += '<link rel="stylesheet" ';
// output += 'href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" ';
// output += 'integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" ';
// output += 'crossorigin="anonymous">\n';

output += '<link rel="stylesheet" ';
output += 'href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" ';
output += 'integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" ';
output += 'crossorigin="anonymous">\n';

output += `<style>
@import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,700;1,400;1,700&display=swap');
p { font-family: 'STIX Two Text', serif; font-weight: 400; text-rendering: optimizeLegibility; text-align: justify; }
li { font-family: 'STIX Two Text', serif; font-weight: 400; text-rendering: optimizeLegibility; }
h1 { text-align: center; }
.navbar { padding: 0 0.5rem; }
.navbar li { font-family: var(--bs-font-sans-serif); font-weight: normal; }
.container-lg { max-width: 960px; }
.card-header { padding: 0.3rem 0.7rem 0.1rem; }
.card-header p:last-child { margin-bottom: 0; }
.card-body { padding: 0.35rem 0.7rem; }
.card-body p:last-child { margin-bottom: 0; }
.card-body ul:last-child { margin-bottom: 0; }
.card-body ol:last-child { margin-bottom: 0; }
.card-body p + ul { margin-top: -0.5rem; }
.card-body p + ol { margin-top: -0.5rem; }
.card-body ul + p { margin-top: -0.5rem; }
.card-body ol + p { margin-top: -0.5rem; }
.card-body .katex-display { margin: -0.5rem 0 0.5rem; }
.katex { font-size: 1.05em; }
</style>\n`;

output += '</head>\n';
output += '<body>\n';

output += navbar;

output += "<div class='container-lg'>\n";
output += "<div class='d-print-none' style='padding-top: 4.0rem;'>\n";
output += "</div>\n";
output += "<main>\n";
output += md.render(input);
output += "</main>\n";
output += "</div>\n";

output += '<script ';
output += 'src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" ';
output += 'integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" ';
output += 'crossorigin="anonymous"></script>\n';

if (debug) {
    output += '<script type="text/javascript" src="https://livejs.com/live.js"></script>\n';
}

output += '</body>\n';
output += '</html>\n';

fs.writeFileSync("output/test.html", output);
