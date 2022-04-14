---
title: Wiki Pages structure
description: The ins and outs of the wiki's general page structure.
---

# Wiki Pages structure

The pages of this wiki follow some specific structures to keep its style consistent, but also allow easier maintenance of them.  
This page covers what you need to know about the page structure and especially what you can and cannot edit.

## Setup

The wiki uses different pieces of software to provide the functionality you can see here.

### What we use

The wiki is using the following things:

- [MkDocs][mkdocs] to turn Markdown files into static HTML pages.
- [Material for MkDocs][mkdocs-material] for the theme and some additional features.
- [PyMdownX][pymdownx] for various features.
- [Awesome Pages][awesome-pages] for the automatic page-nav generation.
- [Pagenav Generator][pagenav-generator] for automatic generation of page lists in various pages.
- [autolink references][autolink-references] to automatically turn `MC-<id>` into links to the respective bug tracker entry.
- [i18n] for multi-language support.
- [Redirects][redirects] to redirect old links to the new pages.

### How to install

The Repository of this wiki contains a `requirements.txt` which is used to install all the required dependencies when updating the pages.  
The easiest way to install all dependencies is to navigate to the folder containing the `requirements.txt`, open Git Bash and execute `pip install -r requirements.txt`

### Live preview

It is recommendet to use the live preview of MkDocs to see your changes update live when saving your changes.  
To use this, make sure to be in the folder containing the `mkdocs.yml`, open Git Bash and run `mkdocs serve`. After the pages have been build should a live-preview be shown under the localhost IP (usually `127.0.0.1:8000`)

## Structure

Now that you have setup everything can the work start. Below are all the important things you should know about the wiki pages.

### Frontmatter

We use so-called `Frontmatter` to add custom information and settings to a page.  
In all cases is this usually the `title` and `description` which set the `<title>` tag (And meta tags such as `og:title`) as well as the description meta tags for the HTML page.

The Frontmatter is at the very start of the page and is in the following format:

```markdown
---
title: title
description: description
---
```

!!! info "Note"
    The frontmatter does NOT use Markdown formatting. Instead is everything in-between the `---` treated as YAML, which is why it is also often referred to as `YAML-Frontmatter`.

### Info boxes

Info boxes (Known as "Admonition" within MkDocs) are made by using three exclamation marks, the type and finally the title (Everything is separated by spaces. Title needs to be surrounded with double quotes "like this").  
The text itself is on the next line with an indent of 4 spaces (Aligning it vertically with the type).

!!! example "Example"
    === "Markdown"
        ```markdown
        !!! info "Irony"
            Isn't it ironic that we use an example-type admonition to have this example?
        ```
    
    === "Result"
        
        !!! info "Irony"
            Isn't it ironic that we use an example-type admonition to have this example?


!!! warning "Important"
    You need to keep an empty line **before** and **after** an admonition box, or it won't render!

### Tabs

You can create tabs - Like the one used in the example above - to showcase different options, results, etc.

The tabs follow a synaxt similar to [Info boxes](#info-boxes) with two key differences:

1. Tabs use `===` instead of `!!!`
2. Tabs do not have a type. It's only `=== "title here"`

Similar to info boxes is the content on the next line with an indent of 4 spaces.  
You can create as many tabs as you like and they will all be grouped together, unless separated by non-indendet text, or by using `===! "title"` to indicate a new group

!!! example "Example"
    === "Markdown"
        ```markdown
        === "Tab A"
            Content
        
        === "Tab B"
            More Content
        
        ===! "Tab 1"
            This tab is in a new group
        
        === "Tab 2"
            This one is in the same group as Tab 1.
        ```
    
    === "Result"
        === "Tab A"
            Content
        
        === "Tab B"
            More Content
        
        ===! "Tab 1"
            This tab is in a new group
        
        === "Tab 2"
            This one is in the same group as Tab 1.

### Links

Links are automatically rendered as clickable ones when pasted as-is into the markdown file (This doesn't happen with default python markdown).  
Additionally is the [Autolink Refernces][autolink-references] plugin used, which allows you to simply paste `MC-<id>` into the markdown file and it will be rendered into a text linking to `https://bugs.mojang.com/browse/MC-<id>`.

!!! example "Example"
    === "Markdown"
        ```markdown
        https://itemsadder.devs.beer
        
        MC-<id>
        ```
    
    === "Result"
        https://itemsadder.devs.beer
        
        MC-1

### Buttons

Buttons are created by appending `{ .md-button }` to an embedded Link. Additionally can different `.md-button--<style>` attributes be added to change the style of the button.  
Additional styles (colors) can be added by updating the `colors.css` file.

!!! example "Example"
    === "Markdown"
        ```markdown
        [Button](#){ .md-button }
        [Button (Primary)](#){ .md-button .md-button--primary }
        [Button (Spigot)](#){ .md-button .md-button--spigot }
        [Button (McMarket)](#){ .md-button .md-button--mcmarket }
        [Button (Polymart)](#){ .md-button .md-button--polymart }
        ```
    
    === "Result"
        [Button](#){ .md-button }
        [Button (Primary)](#){ .md-button .md-button--primary }
        [Button (Spigot)](#){ .md-button .md-button--spigot }
        [Button (McMarket)](#){ .md-button .md-button--mcmarket }
        [Button (Polymart)](#){ .md-button .md-button--polymart }
        
### Emojis and SVG icons

You can use Emojis in markdown pages using the commonly used `:emoji:` syntax.  
Additionally does the extension used offer support to include SVG icons from [:fontawesome-brands-font-awesome:{ style="color:var(--md-default-fg-color)" } FontAwesome][fontawesome], [:material-material-design:{ style="color:var(--md-default-fg-color)" } Material Designs][material-designs] and [:octicons-mark-github-16:{ style="color:var(--md-default-fg-color)" } Octicons][octicons]

!!! example "Example"
    === "Markdown"
        ```markdown
        **Emojis:**
        
        - :smile:
        
        **FontAwesome icons:**
        
        - :fontawesome-solid-tv: (Solid icons)
        - :fontawesome-regular-eye: (Regular icons)
        - :fontawesome-brands-discord: (Brand icons)
        
        **Material Design Icons:**
        
        - :material-axe:
        
        **GitHub Octicons:**
        
        - :octicons-mark-github-16:
        ```
    
    === "Result"
        **Emojis:**
        
        - :smile:
        
        **FontAwesome icons:**
        
        - :fontawesome-solid-tv: (Solid icons)
        - :fontawesome-regular-eye: (Regular icons)
        - :fontawesome-brands-discord: (Brand icons)
        
        **Material Design Icons:**
        
        - :material-axe:
        
        **GitHub Octicons:**
        
        - :octicons-mark-github-16:

!!! warning "Important"
    === "FontAwesome"
        Only the **free** icons are supported. This means that ones only available through premium cannot be used.
    
    === "GitHub Octicons"
        GitHub offers their SVG icons in 3 variants: 12, 16 and 24 pixel size.  
        Because of this do you need to add the size as a final argument to the emoji-syntax, as shown above with the [GitHub Mark SVG][github-mark]

### Default Markdown

MkDocs supports the most common Markdown syntax. A summary of it can be found here:  
https://www.markdownguide.org/basic-syntax/

With that said, are there small, yet important differences that you need to keep in mind.  
Lists - no matter if ordered or unordered - require at least one empty line before and after them to render. Otherwise it won't be seen as a list. Also, in order for a list to have a proper indend will you need to use 4 spaces and not 2.

!!! example "Example"
    === "Markdown"
        ```markdown
        Valid List:
        
        - Entry 1
        - Entry 2
        
        Invalid List:
        - Entry 1
        - Entry 2
        
        ----
        
        Valid List indents:
        
        - Entry 1
            - Entry 1a
        - Entry 2
        
        Invalid List indents:
        
        - Entry 1
          - Entry 1a
        - Entry 2
        ```
    
    === "Result"
        Valid List:
        
        - Entry 1
        - Entry 2
        
        Invalid List:
        - Entry 1
        - Entry 2
        
        ----
        
        Valid List indents:
        
        - Entry 1
            - Entry 1a
        - Entry 2
        
        Invalid List indents:
        
        - Entry 1
          - Entry 1a
        - Entry 2

[mkdocs]: https://www.mkdocs.org
[mkdocs-material]: https://squidfunk.github.io/mkdocs-material
[pymdownx]: https://facelessuser.github.io/pymdown-extensions
[awesome-pages]: https://github.com/lukasgeiter/mkdocs-awesome-pages-plugin/
[pagenav-generator]: https://github.com/Andre601/mkdocs-pagenav-generator
[autolink-references]: https://github.com/theskumar/autolink-references-mkdocs-plugin
[i18n]: https://github.com/ultrabug/mkdocs-static-i18n
[redirects]: https://github.com/mkdocs/mkdocs-redirects

[fontawesome]: https://fontawesome.com/search?m=free
[material-designs]: https://materialdesignicons.com/
[octicons]: https://primer.style/octicons

[github-mark]: https://primer.style/octicons/mark-github-16