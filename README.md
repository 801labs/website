# 801 Labs site
Current hackerspace website

Tools: HTML, CSS, JavaScript, [Bulma](https://bulma.io/) CSS framework, [Hugo](https://gohugo.io/) static site framework

__Hire: Veronica Eulenberg__ (HappyViki) is actively looking for work in Salt Lake City, Utah.
- Full stack developer, see: [veronicodes.com](https://veronicodes.com/)
- Tools, software, and frameworks: CSS, HTML, JavaScript, jQuery, ReactJS, Node, NPM, Babel, Webpack, Axios, Express, WordPress, WooCommerce, All Import Pro, Avada WordPress theme, Beaver Builder, Bootstrap, Bulma, Hugo, PHP, GIT, GitHub, MySQL, PHPMyAdmin, GoDaddy, BlueHost, HostGator, Bash, Python, THE INTERNET (to look things up) and PHONE (to talk to people)

Contact HappyViki through [801Labs Discord](https://discord.com/invite/uSQdUPt) or [UtahJS Slack](https://utahjavascript.slack.com/team/UMGDK7RND) if you have any questions about 801 Labs site.

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

Manual testing on mobile:
```
hugo server --buildDrafts --watch --bind [computer ip] --baseURL http://[computer ip]
```
Go to http://[computer ip] on your phone!

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
      name = "Volunteer"
      url = "{{< ref "/volunteer" >}}"
      weight = 600
```
