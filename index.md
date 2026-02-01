---
layout: default
title: Home
---

# ☁️ Cloud & DevOps Notes

{% for post in site.posts %}
### [{{ post.title }}]({{ post.url }})
{{ post.excerpt | strip_html | truncate: 120 }}

Tags: {% for tag in post.tags %}`{{ tag }}` {% endfor %}
---
{% endfor %}
