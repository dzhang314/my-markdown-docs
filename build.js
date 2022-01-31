const fs = require('fs');

const template = fs.readFileSync("templates/dkzhang-template.html", 'utf8');
const navbar   = fs.readFileSync("templates/dkzhang-navbar.html"  , 'utf8');
const style    = fs.readFileSync("templates/dkzhang-style.css"    , 'utf8');
const macros   = fs.readFileSync("templates/dkzhang-macros.json"  , 'utf8');

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
        macros: JSON.parse(macros)
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

compileMarkdown("pages/home.md"        , "David K. Zhang - Personal Website", true, "output/index.html"       );
compileMarkdown("pages/projects.md"    , "David K. Zhang - Projects"        , true, "output/projects.html"    );
compileMarkdown("pages/publications.md", "David K. Zhang - Publications"    , true, "output/publications.html");
compileMarkdown("pages/about.md"       , "David K. Zhang - About"           , true, "output/about.html"       );
compileMarkdown("pages/contact.md"     , "David K. Zhang - Contact"         , true, "output/contact.html"     );
compileMarkdown("notes/misc.md"        , "David K. Zhang - Misc. Thoughts"  , true, "output/misc.html"        );

compileMarkdown("pages/home.md"        , "David K. Zhang - Personal Website", false, "../dzhang314.github.com/index.html"       );
compileMarkdown("pages/projects.md"    , "David K. Zhang - Projects"        , false, "../dzhang314.github.com/projects.html"    );
compileMarkdown("pages/publications.md", "David K. Zhang - Publications"    , false, "../dzhang314.github.com/publications.html");
compileMarkdown("pages/about.md"       , "David K. Zhang - About"           , false, "../dzhang314.github.com/about.html"       );
compileMarkdown("pages/contact.md"     , "David K. Zhang - Contact"         , false, "../dzhang314.github.com/contact.html"     );
compileMarkdown("notes/misc.md"        , "David K. Zhang - Misc. Thoughts"  , false, "../dzhang314.github.com/misc.html"        );
