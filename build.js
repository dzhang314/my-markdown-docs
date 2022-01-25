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
        "\\R": "\\mathbb{R}"
    }}
});

md.use(require('markdown-it-container'), 'definition', {
    validate: function(params, markup) {
        return params.trim().match(/^definition$/);
    },
    render: function(tokens, idx) {
        if (tokens[idx].nesting === 1) { // opening tag
            return '<p><div class="card bg-light"><div class="card-body">\n';
        } else { // closing tag
            return '</div></div></p>\n';
        }
    }
});

console.log("Reading input file...");
const input = fs.readFileSync("test.md", "utf8");
const title = "Title";
const sans_serif = false;

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

output += "<style> @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,700;1,400;1,700&display=swap'); </style>\n";
output += `<style>
p { font-family: 'STIX Two Text', serif; }
h1 { text-align: center; }
.card-body p:last-child { margin-bottom: 0; padding-bottom: 0; }
.katex { font-size: 1.1em; }
</style>\n`;

output += '</head>\n';
output += '<body>\n';

output += navbar;

output += "<div class='container'>\n";
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

output += '</body>\n';
output += '</html>\n';

fs.writeFileSync("output/test.html", output);
