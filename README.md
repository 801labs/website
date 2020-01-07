# 801 Labs site
Current hackerspace website

Tools: HTML, CSS, JavaScript, [Bulma](https://bulma.io/) CSS framework, [Hugo](https://gohugo.io/) static site framework

# Guide

[Hugo Docs](https://gohugo.io/documentation/) | [Bulma Docs](https://bulma.io/documentation/)

### Look at the site:
```
clone https://github.com/801labs/website.git
cd website
hugo server
```
Go to http://localhost:1313/

### Deploy the site:
```
cd website
hugo
```
It's inside `/website/public`

### If you have [serve](https://www.npmjs.com/package/serve), you can look at the build:
```
cd website
serve public
```
Go to http://localhost:5000

## Page Structure

Logos: `/website/layouts/partials/logos/`

CSS/JS/IMG: `/website/static/` -> `href="{{ "[css/js/img]/[file name]" | absURL }}"`

### Create a page:

Change how pages are created: `/website/archetypes`

`hugo new [page-name.html]` -> `/website/content/[page-name.html]`

### Default (default.html) page:
```
---
title: "{{ replace .Name "-" " " | title }}" \\ Page Name
date: {{ .Date }} \\ Example: 2019-12-17T16:34:31-07:00
draft: true \\ This is default, change to 'false' when ready
---

<section class="section has-text-centered">
  <div class="container">
    <h1 class="title">{{ replace .Name "-" " " | title }}</h1> \\ Page Name
  </div>
</section>

<!-- Body Of Page -->
```

### Navigation:
Layout: `/website/layouts/partials/menus/main-menu.html`

Menu items: `/website/config.toml`

Example with meanings:

```
[menu]

  [[menu.main]]
    name = "Home"
    url = "/"
    weight = 100 // Where the item is placed in menu, low to high

  [[menu.main]]
    identifier = "about" // Name of parent, aka submenu init
    name = "About"
    url = "/about/"
    weight = 200

  [[menu.main]]
    parent = "about" // Name of parent, aka submenu item
    name = "Events"
    url = "/events/"
    weight = 300

  [[menu.main]] // Stand alone item with no parent
      name = "Get Involved" 
      url = "/get-involved/"
      weight = 600
```


Contact HappyViki through [801Labs Slack](https://801labs.slack.com/) if you have any questions.
