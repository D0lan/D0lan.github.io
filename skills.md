---
layout: page
title: Skills
permalink: /skills/
---

{% for skill in site.data.skills %}
  <div class="skill" data-aos="fade-left">
    <h3>{{ skill.name }}</h3>
    <div class="skill-bar">
      <div class="skill-level" style="width: {{ skill.level }};"></div>
    </div>
  </div>
{% endfor %}