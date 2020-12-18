---
layout: base.liquid
---
  <div style="display:none">

      {% for post in collections.posts reversed %}
        <a href="{{ post.url }}">

        <h2>{{ post.data.title }}</h2>
        <time>{{ post.data.date | date: "%B %d, %Y" }}</time>
        </a>
      {% endfor %}

    </div>
  </main>


