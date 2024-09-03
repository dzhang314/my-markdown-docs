# Building Static Websites

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>

This website is _static_, which means that it consists of a fixed set of HTML, CSS, and JavaScript files. Writing those files by hand can be tedious, so in these notes, I'll describe the tools I've created to automate the process of building dkzhang.com.

There are lots of popular and well-tested tools for creating static websites, like [Jekyll](https://jekyllrb.com/) and [Hugo](https://gohugo.io/). I chose to design my own static site generator for a few reasons:

- I want to understand how my website is built from the ground up. I don't want to serve a single HTML tag or CSS rule that I can't explain the purpose of.

- I'm very particular about typesetting and mathematical typography. I want to precisely control how text and math are rendered on both the screen and the printed page. (Websites that print well on paper are exceedingly rare.)

- I like programming, and building a static site generator is [something of](https://news.ycombinator.com/item?id=38126210) [a rite of passage](https://news.ycombinator.com/item?id=25227181) [for programming enthusiasts](https://news.ycombinator.com/item?id=27687899).

All of the tools I've developed for building dkzhang.com are **open-source and freely available on GitHub** in the [dzhang314/my-markdown-docs](https://github.com/dzhang314/my-markdown-docs) repository. If you'd like to create a similar website, please feel free to use my files as a starting point --- but be aware that they are highly tailored to my specific preferences, and you will likely want to adapt them to suit your own taste.



## Overview

Every page on my website is generated from a Markdown file in [dzhang314/my-markdown-docs](https://github.com/dzhang314/my-markdown-docs). These Markdown files, together with a few [HTML/CSS templates](https://github.com/dzhang314/my-markdown-docs/tree/main/templates) and [a JS build script](https://github.com/dzhang314/my-markdown-docs/blob/main/build.mjs), are the only manually-written files I use to create dkzhang.com.

Each page has the same basic structure outlined in [dkzhang-template.html](https://github.com/dzhang314/my-markdown-docs/blob/main/templates/dkzhang-template.html). This template has four fields that [build.mjs](https://github.com/dzhang314/my-markdown-docs/blob/main/build.mjs) fills in to generate the final HTML file for each page.

- `{{{STYLE}}}` is replaced with the contents of [dkzhang-style.css](https://github.com/dzhang314/my-markdown-docs/blob/main/templates/dkzhang-style.css).
- `{{{NAVBAR}}}` is replaced with the contents of [dkzhang-navbar.html](https://github.com/dzhang314/my-markdown-docs/blob/main/templates/dkzhang-navbar.html).
- `{{{TITLE}}}` is replaced with the title supplied to `compilePage`.
- `{{{CONTENT}}}` is replaced with HTML rendered from the Markdown file supplied to `compilePage`.



## Components

Most of the content on this website is built from basic HTML elements, like `<h1>` titles, `<h2>` headings, `<p>` paragraphs, and `<ul>` lists. In addition, I use two special components from [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/). First, a `fixed-top` [Bootstrap Navbar](https://getbootstrap.com/docs/5.3/components/navbar/) provides a navigation interface that sticks to the top of the page as you scroll. I apply `navbar-expand-md` to collapse the navbar into a hamburger menu on smaller screens and `d-print-none` to hide the navbar when printing. Second, I use [Bootstrap cards](https://getbootstrap.com/docs/5.3/components/card/) to call attention to important information and set mathematical definitions and proofs apart from surrounding descriptive text.

The structure of the navbar is defined in [dkzhang-navbar.html](https://github.com/dzhang314/my-markdown-docs/blob/main/templates/dkzhang-navbar.html), which I manually edit every time I add a new page. I might automate the process of generating the navbar in the future, but I don't have enough pages to necessitate that yet.



## Style

The style of this website is based on the [Bootswatch Litera theme](https://bootswatch.com/litera/) with a few manual tweaks in [dkzhang-style.css](https://github.com/dzhang314/my-markdown-docs/blob/main/templates/dkzhang-style.css) to adjust navbar and card padding. I apply a `max-width` constraint to the main `container-lg` to improve legibility and ensure consistent printing. A width of `19cm` fits A4 paper with 1cm margins and US Letter paper with 0.5" margins.

I display text using the [STIX fonts](https://www.stixfonts.org/), which are optimized for legibility on both screen and print media and are conveniently hosted by [Google Fonts](https://fonts.google.com/specimen/STIX+Two+Text). To match the STIX glyphs, I display code using [Fira Code](https://github.com/tonsky/FiraCode?tab=readme-ov-file) at `font-size: 1.0rem;` and slightly enlarge the KaTeX math font with `.katex { font-size: 1.05em; }`.



## Rendering

Every page on my website is written in Markdown, a lightweight markup language which is easier to write by hand than HTML. Using [markdown-it](https://github.com/markdown-it/markdown-it), an extensible Markdown-to-HTML renderer, I developed my own dialect of Markdown with two extensions:

- TeX-style math typesetting with [KaTeX](https://katex.org/), featuring both inline `$$...$$` `\(...\)` and display `$$$$...$$$$` `\[...\]` environments, implemented with [custom parsing rules](https://github.com/dzhang314/my-markdown-docs/blob/main/build.mjs).

- Block syntax for Bootstrap cards using [markdown-it-container](https://github.com/markdown-it/markdown-it-container), which turns this:

    ```
    :::::: card
    ::: card-header
    **Quadratic Formula**
    :::
    ::: card-body
    **Theorem**: Let $a, b, c \in \C$ be real or complex numbers
    with $a \ne 0$. For any $x \in \C$, the quadratic equation
    $ax^2 + bx + c = 0$ is satisfied if and only if
    \[ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}. \]
    :::
    ::::::
    ```

    into this:

    :::::: card
    ::: card-header
    **Quadratic Formula**
    :::
    ::: card-body
    **Theorem**: Let $a, b, c \in \C$ be real or complex numbers
    with $a \ne 0$. For any $x \in \C$, the quadratic equation
    $ax^2 + bx + c = 0$ is satisfied if and only if
    \[ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}. \]
    :::
    ::::::

I use [`katex.renderToString`](https://katex.org/docs/api) to render math to static HTML elements that display correctly even when JavaScript is disabled. I also maintain a collection of [TeX macros](https://github.com/dzhang314/my-markdown-docs/blob/main/templates/dkzhang-macros.json) with helpful abbreviations that I've developed for real-time note-taking during lectures and seminars.



## Writing

My markdown-it rendering pipeline is fast enough to run on every keystroke as I type. I use [VSCode](https://code.visualstudio.com/) with the [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) and [Run on Save](https://marketplace.visualstudio.com/items?itemName=pucelle.run-on-save) extensions to [automatically run build.mjs](https://github.com/dzhang314/my-markdown-docs/blob/main/.vscode/settings.json) and view the final rendered webpage in real time while I write. This is especially helpful for typesetting complex equations and fiddling with line breaks.

You can **try out my writing setup** at [dkzhang.com/ZhangEdit](https://www.dkzhang.com/ZhangEdit), a live in-browser Markdown editor that uses the same markdown-it extensions and CSS styles as my website.



## Hosting

This website is hosted on [GitHub Pages](https://pages.github.com/), which provides free hosting for static websites. When you visit dkzhang.com, GitHub's servers send you the bundle of generated HTML files that I've uploaded to [this GitHub repository](https://github.com/dzhang314/dzhang314.github.com) (which is different from [my-markdown-docs](https://github.com/dzhang314/my-markdown-docs)).

Since my GitHub username is [dzhang314](https://github.com/dzhang314), this website would normally be hosted at the URL [dzhang314.github.io](https://dzhang314.github.io/). To make it appear at dkzhang.com, I've configured a [custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) that I purchased through [Squarespace Domains](https://domains.squarespace.com/) (formerly Google Domains) for $12/year.
