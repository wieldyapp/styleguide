---
layout: base.liquid
---

  <main>
    <div>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Mission name</th>
            <th>Activated</th>
            <th>People involved</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <checkbox-switch checked class="checkbox"></checkbox-switch>
            </td>
            <td>
              <strong>From Russia with Love (1963)</strong>
            </td>
            <td>
              3 Days Ago
            </td>
            <td>
              <strong>548</strong>
            </td>
          </tr>
          <tr>
            <td>
              <checkbox-switch disabled checked></checkbox-switch>
            </td>
            <td>
              <strong>Goldfinger (1964)</strong>
            </td>
            <td>
              4 Days Ago
            </td>
            <td>
              <strong>881</strong>
            </td>
          </tr>
          <tr>
            <td>
              <checkbox-switch></checkbox-switch>
            </td>
            <td>
              <strong>Thunderball (1965)</strong>
            </td>
            <td>
              4 Days Ago
            </td>
            <td>
              <strong>3,698</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <pre>
          <code><span>&lt;</span>checkbox-switch selected<span>&gt;&lt;/</span>checkbox-switch<span>&gt;</span></code>
        </pre>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Mission name</th>
            <th>Activated</th>
            <th>People involved</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <toggle-switch checked="" class="checkbox" aria-checked="true" role="checkbox" tabindex="0">
              </toggle-switch>
            </td>
            <td>
              <strong>From Russia with Love (1963)</strong>
            </td>
            <td>
              3 Days Ago
            </td>
            <td>
              <strong>548</strong>
            </td>
          </tr>
          <tr>
            <td>
              <toggle-switch disabled="" role="checkbox" tabindex="0"></toggle-switch>
            </td>
            <td>
              <strong>Goldfinger (1964)</strong>
            </td>
            <td>
              4 Days Ago
            </td>
            <td>
              <strong>881</strong>
            </td>
          </tr>
          <tr>
            <td>
              <toggle-switch role="checkbox" tabindex="0"></toggle-switch>
            </td>
            <td>
              <strong>Thunderball (1965)</strong>
            </td>
            <td>
              4 Days Ago
            </td>
            <td>
              <strong>3,698</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="display:none">

      {% for post in collections.posts reversed %}
        <a href="{{ post.url }}">

        <h2>{{ post.data.title }}</h2>
        <time>{{ post.data.date | date: "%B %d, %Y" }}</time>
        </a>
      {% endfor %}

    </div>
  </main>


