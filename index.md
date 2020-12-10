---
layout: base.liquid
---

# Welcome to my site!

Not to brag, but it's pretty great.

{% for post in collections.posts reversed %}
  <a href="{{ post.url }}">
    <h2>{{ post.data.title }}</h2>
    <time>{{ post.data.date | date: "%B %d, %Y" }}</time>
  </a>
{% endfor %}

<hello-world></hello-world>

## Mixing html and markdown seems to work

<h3>Color Manipulation (Lightness)</h3>

<div class="flex">
  <div style="background-color: var(--link-color-light)"></div>
  <div style="background-color: var(--link-color)"></div>
  <div style="background-color: var(--link-color-dark)"></div>
  <div style="background-color: var(--link-color-darker)"></div>
</div>