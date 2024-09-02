# Building Static Websites

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>

This website is _static_, which means that it consists of a fixed set of HTML, CSS, and JavaScript files. Writing those files by hand can be tedious, so in these notes, I'll describe the tools I've created to automate that process and build dkzhang.com.

There are lots of popular and well-tested tools for creating static websites, like [Jekyll](https://jekyllrb.com/) and [Hugo](https://gohugo.io/). I chose to design my own tools for a few reasons:

- I want to understand how my website is built from the ground up. I don't want to serve a single HTML tag or CSS rule that I don't know the purpose of.

- I'm very particular about typesetting and mathematical typography. I want to precisely control how text and math are rendered on both the screen and the printed page. (Websites that print well on paper are exceedingly rare.)

- I like programming, and building a static site generator is [something of](https://news.ycombinator.com/item?id=38126210) [a rite of passage](https://news.ycombinator.com/item?id=25227181) [for programming enthusiasts](https://news.ycombinator.com/item?id=27687899).

## Overview

Every page on my website is generated from a Markdown file in the [dzhang314/my-markdown-docs GitHub repository](https://github.com/dzhang314/my-markdown-docs). These Markdown files, together with a few [HTML/CSS templates](https://github.com/dzhang314/my-markdown-docs/tree/main/templates) and [a JS build script](https://github.com/dzhang314/my-markdown-docs/blob/main/build.mjs), are the only files that I manually wrote.

Each page has the same basic structure outlined in [`dkzhang-template.html`](https://github.com/dzhang314/my-markdown-docs/blob/main/templates/dkzhang-template.html). This template has four fields that [`build.mjs`](https://github.com/dzhang314/my-markdown-docs/blob/main/build.mjs) fills in to generate the final HTML file for each page.

- `{{{STYLE}}}` is replaced with the contents of [`dkzhang-style.css`](https://github.com/dzhang314/my-markdown-docs/blob/main/templates/dkzhang-style.css).
- `{{{NAVBAR}}}` is replaced with the contents of [`dkzhang-navbar.html`](https://github.com/dzhang314/my-markdown-docs/blob/main/templates/dkzhang-navbar.html).
- `{{{TITLE}}}` is replaced with the title supplied as the second argument to `compilePage`.
- `{{{CONTENT}}}` is replaced with HTML rendered from the Markdown file supplied as the first argument to `compilePage`.

## Components

Most of the content on this website is built from basic HTML elements, like `<h1>` titles, `<h2>` headings, `<p>` paragraphs, and `<ul>` lists. In addition, I use two special components from [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/): first, a `fixed-top` [Bootstrap Navbar](https://getbootstrap.com/docs/5.3/components/navbar/) provides a navigation interface that stays at the top of the page as you scroll. I apply `navbar-expand-md` to collapse the navbar into a hamburger menu on smaller screens and `d-print-none` to hide the navbar when printing. Second, I use [Bootstrap cards](https://getbootstrap.com/docs/5.3/components/card/) to call attention to important information and set mathematical definitions and proofs apart from surrounding descriptive text.

The structure of the navbar is defined in [`dkzhang-navbar.html`](https://github.com/dzhang314/my-markdown-docs/blob/main/templates/dkzhang-navbar.html), which I manually edit every time I add a new page. I might automate the process of generating the navbar in the future, but I don't have enough pages to necessitate that yet.

## Style

The style of this website is based on the [Bootswatch Litera theme](https://bootswatch.com/litera/) with a few tweaks in [`dkzhang-style.css`](https://github.com/dzhang314/my-markdown-docs/blob/main/templates/dkzhang-style.css) to adjust navbar and card padding. I also add a `max-width` constraint to the main `container-lg` (but not the navbar) to improve legibility and ensure consistent printing. I display text using the [STIX fonts](https://www.stixfonts.org/), conveniently hosted by [Google Fonts](https://fonts.google.com/specimen/STIX+Two+Text), and I slightly enlarge the KaTeX math font size to better match the STIX glyphs.

## Rendering

Every page on my website is written in Markdown, a lightweight markup language which is easier to write by hand than HTML. Using [`markdown-it`](https://github.com/markdown-it/markdown-it), an extensible Markdown-to-HTML renderer, I developed my own dialect of Markdown that supports two custom features:

- TeX-style math rendering using [KaTeX](https://katex.org/), featuring both inline-mode `$$...$$` and display-mode `$$$$...$$$$` environments, using [custom `markdown-it` parser rules in `build.mjs`](https://github.com/dzhang314/my-markdown-docs/blob/main/build.mjs).
- Block syntax for Bootstrap cards using [`markdown-it-container`](https://github.com/markdown-it/markdown-it-container), which turns this:

    ```
    :::::: card
    ::: card-header
    **Card Title**
    :::
    ::: card-body
    This is the body text of the card.
    :::
    ::::::
    ```
    into this:
    :::::: card
    ::: card-header
    **Card Title**
    :::
    ::: card-body
    This is the body text of the card.
    :::
    ::::::


## Editing

WIP

## Building

WIP

## Hosting

WIP
