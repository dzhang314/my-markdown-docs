const fs = require('fs');
const crypto = require('crypto');

const template = fs.readFileSync("templates/dkzhang-template.html", 'utf8');
const navbar   = fs.readFileSync("templates/dkzhang-navbar.html"  , 'utf8');
const style    = fs.readFileSync("templates/dkzhang-style.css"    , 'utf8');
const macros   = JSON.parse(fs.readFileSync("templates/dkzhang-macros.json", 'utf8'));
const hashes   = JSON.parse(fs.readFileSync("hashes.json"                  , 'utf8'));

const md = require('markdown-it')({
    html: true,       // allow HTML tags
    linkify: true,    // automatically convert URLs into links
    typographer: true // replace quotes with smart quotes
});

md.use(require('markdown-it-attrs'));

md.use(require('markdown-it-texmath'), {
    engine: require('katex'),
    delimiters: 'dollars',
    katexOptions: {
        macros: macros
    }
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

addContainerType('card', /^card$/, '<p><div class="card bg-light border-dark">', '</div></p>');
addContainerType('card-header', /^card-header$/, '<div class="card-header bg-dark text-white">', '</div>');
addContainerType('card-body', /^card-body$/, '<div class="card-body">', '</div>');
addContainerType('sans', /^sans$/, '<div class="sans">', '</div>');

function compileMarkdown(input, title, debug, outputFile) {
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

function compilePage(inputFile, title, outputFile) {
    const input = fs.readFileSync(inputFile, "utf8").replaceAll("\r\n", "\n");
    const hash = crypto.createHash('sha384').update(input).digest('hex');
    if (hashes[inputFile] === hash) {
        console.log("Skipping " + inputFile + " because it has not changed.");
    } else {
        console.log("Compiling " + inputFile + " to " + outputFile + "...");
        const today = new Date();
        const preprocessedInput = input
            .replaceAll('&qed;', '<span class="float-end">&#9633;</span>')
            .replaceAll('&today;', today.toISOString().split('T')[0]);
        compileMarkdown(preprocessedInput, title, true, "output/" + outputFile);
        if (fs.existsSync("../dzhang314.github.com")) {
            compileMarkdown(preprocessedInput, title, false, "../dzhang314.github.com/" + outputFile);
        }
        hashes[inputFile] = hash;
    }
}

compilePage("pages/home.md"        , "David K. Zhang - Personal Website"      , "index.html"       );
compilePage("pages/projects.md"    , "David K. Zhang - Projects"              , "projects.html"    );
compilePage("pages/publications.md", "David K. Zhang - Publications"          , "publications.html");
compilePage("pages/about.md"       , "David K. Zhang - About"                 , "about.html"       );
compilePage("pages/contact.md"     , "David K. Zhang - Contact"               , "contact.html"     );
compilePage("notes/groups.md"      , "David K. Zhang - Group Theory"          , "groups.html"      );
compilePage("notes/rings.md"       , "David K. Zhang - Ring Theory"           , "rings.html"       );
compilePage("notes/linalg.md"      , "David K. Zhang - Linear Algebra"        , "linalg.html"      );
compilePage("notes/topology.md"    , "David K. Zhang - Topology"              , "topology.html"    );
compilePage("notes/misc.md"        , "David K. Zhang - Misc. Thoughts"        , "misc.html"        );
compilePage("notes/ecc.md"         , "David K. Zhang - Error-Correcting Codes", "ecc.html"         );
compilePage("notes/legion.md"      , "David K. Zhang - Legion Programming"    , "legion.html"      );
fs.writeFileSync("hashes.json", JSON.stringify(hashes, null, 4));
