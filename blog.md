---
layout: default
title: Blog
description: Read Aryan's thoughts on neuromorphic computing, technology, nature and more.
---

<section class="blog-section">
  <h2 data-aos="fade-down">Blog</h2>
  <div class="post-list">
    {% for post in site.posts %}
      <div class="post-card" data-aos="fade-up" data-aos-delay="{{ forloop.index0 | times: 100 }}">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p class="post-meta">{{ post.date | date: "%B %d, %Y" }} • by {{ post.author | default: site.author }}</p>
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>
        <a class="read-more" href="{{ post.url | relative_url }}">Read more</a>
      </div>
    {% endfor %}
    {% if site.posts == empty %}
      <p style="text-align:center; color:var(--muted-text);">No blog posts yet. Stay tuned!</p>
    {% endif %}
  </div>
</section>