---
layout: default  # Or 'home' if supported
title: Home
---
{% for post in site.posts %}
  <article>
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
    <small>Tags: {{ post.tags | join: ', ' }}</small>
  </article>
{% endfor %}
