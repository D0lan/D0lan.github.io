## Aryan's Jekyll Personal Website

This repository contains a Jekyll‑powered personal website tailored for Aryan.  It features a dynamic rain effect reminiscent of droplets on a window, a tasteful dark theme, and sections for his career and personal interests.

### Structure

- `_config.yml` — Site configuration (title, author, permalink structure, time zone, etc.).
- `_layouts/` — Layout templates (`default.html` for the overall structure and `post.html` for blog posts).
- `_posts/` — Markdown files for blog posts.  Each post is named using the `YYYY‑MM‑DD‑title.md` convention.
- `assets/` — Static assets:
  - `css/style.css` — Main stylesheet.
  - `js/script.js` — Site behaviour (navigation and rain effect).
  - `js/rainyday.min.js` — External library used to simulate raindrops.
  - `images/` — Photographs used by the site (foggy forest and rain drops).
- `index.html` — Home page.
- `about.md` — About page.
- `projects.md` — Projects page.
- `album.md` — Photo/video album page.
- `blog.md` — Blog index.

### Running Locally

To preview the site locally, install Jekyll (`gem install jekyll bundler`) and run:

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000` in your browser.  For GitHub Pages, simply push the contents of this directory to a GitHub repository named `<username>.github.io` (omit the leading slash in `_config.yml` baseurl).

### Creating New Blog Posts

To write a new blog post, add a Markdown file to the `_posts` folder using the `YYYY‑MM‑DD‑title.md` naming scheme.  Include front matter at the top, for example:

```markdown
---
title: "My New Post"
date: 2025-08-09 09:00:00 -0400
description: "A short description of my new post."
---

Here is my blog content written in Markdown...
```

The site will automatically list the post on the blog page and generate an excerpt.

### Adding Photos or Videos

Place additional images in `assets/images/` and reference them in your pages or posts using the Liquid helper `{{ '/assets/images/filename.jpg' | relative_url }}`.  To embed videos, upload them to `assets/videos/` (create the directory if needed) and use an HTML `<video>` tag in your Markdown files.

### Licensing

The photographs included in this repository are used under Creative Commons licenses.  For example, the foggy forest image is licensed under CC BY‑SA 3.0【803315970827640†L139-L174】 and the rain drops image under CC BY‑SA 4.0【66021790133369†L140-L170】.  Please respect the terms of these licenses if you reuse the images.