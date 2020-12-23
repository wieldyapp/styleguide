---
layout: base.liquid
---

  <main>
<div style="margin-bottom: 1rem;">
<table>
<thead>
<tr>
<th>Crop</th>
<th>Crop mode</th>
<th>Focus</th>
<th>Blur</th>
<th>Grayscale</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<select data-feature="crop">
<option>None</option>
<option value="maintain_ratio">maintain_ratio</option>
<option value="force">force</option>
<option value="at_least">at_least</option>
<option value="at_max">at_max</option>
</select>
</td>
<td>
<select data-feature="crop-mode">
<option>None</option>
<option value="resize">resize</option>
<option value="extract">extract</option>
<option value="pad_resize">pad_resize</option>
<option value="pad_extract">pad_extract</option>
</select>
</td>
<td>
<select data-feature="focus">
<option>None</option>
<option value="center">center</option>
<option value="top">top</option>
<option value="left">left</option>
<option value="bottom">bottom</option>
<option value="right">right</option>
<option value="top_left">top_left</option>
<option value="top_right">top_right</option>
<option value="bottom_left">bottom_left</option>
<option value="bottom_right">bottom_right</option>
<option value="auto">auto</option>
<option value="face">face</option>
<option value="custom">custom</option>
</select>
</td>
<td>
<input type="range" min="0" max="100" value="0" data-feature="blur">
</td>
<td>
 <toggle-switch data-feature="grayscale" role="checkbox" tabindex="0"></toggle-switch>
</td>
</tr>
</tbody>
</table>
</div>

<div style="display: grid;grid-gap: 40px; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));padding:20px">
  <div style="position:relative;">
    <img-thumbnail src="https://ik.imagekit.io/demo/resp-img/image1.jpg?tr=w-800,h-600,f-png" format="png" width="240" height="135" alt="Picture" loaded=""></img-thumbnail>
    <context-menu aria-label="Settings menu">
      <svg slot="icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.00002 7.58332C7.32219 7.58332 7.58335 7.32216 7.58335 6.99999C7.58335 6.67782 7.32219 6.41666 7.00002 6.41666C6.67785 6.41666 6.41669 6.67782 6.41669 6.99999C6.41669 7.32216 6.67785 7.58332 7.00002 7.58332Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.00002 3.50001C7.32219 3.50001 7.58335 3.23884 7.58335 2.91668C7.58335 2.59451 7.32219 2.33334 7.00002 2.33334C6.67785 2.33334 6.41669 2.59451 6.41669 2.91668C6.41669 3.23884 6.67785 3.50001 7.00002 3.50001Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.00002 11.6667C7.32219 11.6667 7.58335 11.4055 7.58335 11.0833C7.58335 10.7612 7.32219 10.5 7.00002 10.5C6.67785 10.5 6.41669 10.7612 6.41669 11.0833C6.41669 11.4055 6.67785 11.6667 7.00002 11.6667Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      <ul slot="content">
        <li><button>Dela till Facebook</button></li>
      </ul>
    </context-menu>
  </div>
<div style="position:relative;">
<img-thumbnail src="https://ik.imagekit.io/demo/resp-img/image2.jpg?tr=w-800,h-600,f-png" format="png" width="240" height="135" alt="Picture" loaded=""></img-thumbnail>
<context-menu aria-label="Settings menu">
      <svg slot="icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.00002 7.58332C7.32219 7.58332 7.58335 7.32216 7.58335 6.99999C7.58335 6.67782 7.32219 6.41666 7.00002 6.41666C6.67785 6.41666 6.41669 6.67782 6.41669 6.99999C6.41669 7.32216 6.67785 7.58332 7.00002 7.58332Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.00002 3.50001C7.32219 3.50001 7.58335 3.23884 7.58335 2.91668C7.58335 2.59451 7.32219 2.33334 7.00002 2.33334C6.67785 2.33334 6.41669 2.59451 6.41669 2.91668C6.41669 3.23884 6.67785 3.50001 7.00002 3.50001Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.00002 11.6667C7.32219 11.6667 7.58335 11.4055 7.58335 11.0833C7.58335 10.7612 7.32219 10.5 7.00002 10.5C6.67785 10.5 6.41669 10.7612 6.41669 11.0833C6.41669 11.4055 6.67785 11.6667 7.00002 11.6667Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      <ul slot="content">
        <li><button>Dela till Facebook</button></li>
      </ul>
    </context-menu>
</div>
<div style="position:relative;">
<img-thumbnail src="https://ik.imagekit.io/demo/resp-img/image3.jpg?tr=w-800,h-600,f-png" width="240" height="135" alt="Picture" loaded=""></img-thumbnail>
<context-menu aria-label="Settings menu">
      <svg slot="icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.00002 7.58332C7.32219 7.58332 7.58335 7.32216 7.58335 6.99999C7.58335 6.67782 7.32219 6.41666 7.00002 6.41666C6.67785 6.41666 6.41669 6.67782 6.41669 6.99999C6.41669 7.32216 6.67785 7.58332 7.00002 7.58332Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.00002 3.50001C7.32219 3.50001 7.58335 3.23884 7.58335 2.91668C7.58335 2.59451 7.32219 2.33334 7.00002 2.33334C6.67785 2.33334 6.41669 2.59451 6.41669 2.91668C6.41669 3.23884 6.67785 3.50001 7.00002 3.50001Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.00002 11.6667C7.32219 11.6667 7.58335 11.4055 7.58335 11.0833C7.58335 10.7612 7.32219 10.5 7.00002 10.5C6.67785 10.5 6.41669 10.7612 6.41669 11.0833C6.41669 11.4055 6.67785 11.6667 7.00002 11.6667Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      <ul slot="content">
        <li><button>Dela till Facebook</button></li>
      </ul>
    </context-menu>
</div>
<div style="position:relative;">
<img-thumbnail src="https://ik.imagekit.io/demo/resp-img/image4.jpg?tr=w-800,h-600,f-png" width="240" height="135" alt="Picture" loaded=""></img-thumbnail>
<context-menu aria-label="Settings menu">
      <svg slot="icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.00002 7.58332C7.32219 7.58332 7.58335 7.32216 7.58335 6.99999C7.58335 6.67782 7.32219 6.41666 7.00002 6.41666C6.67785 6.41666 6.41669 6.67782 6.41669 6.99999C6.41669 7.32216 6.67785 7.58332 7.00002 7.58332Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.00002 3.50001C7.32219 3.50001 7.58335 3.23884 7.58335 2.91668C7.58335 2.59451 7.32219 2.33334 7.00002 2.33334C6.67785 2.33334 6.41669 2.59451 6.41669 2.91668C6.41669 3.23884 6.67785 3.50001 7.00002 3.50001Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.00002 11.6667C7.32219 11.6667 7.58335 11.4055 7.58335 11.0833C7.58335 10.7612 7.32219 10.5 7.00002 10.5C6.67785 10.5 6.41669 10.7612 6.41669 11.0833C6.41669 11.4055 6.67785 11.6667 7.00002 11.6667Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      <ul slot="content">
        <li><button>Dela till Facebook</button></li>
      </ul>
    </context-menu>
</div>
<div style="position:relative;">
<img-thumbnail src="https://ik.imagekit.io/demo/resp-img/image5.jpg?tr=w-800,h-600,f-png" width="240" height="135" alt="Picture" loaded=""></img-thumbnail>
<context-menu aria-label="Settings menu">
      <svg slot="icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.00002 7.58332C7.32219 7.58332 7.58335 7.32216 7.58335 6.99999C7.58335 6.67782 7.32219 6.41666 7.00002 6.41666C6.67785 6.41666 6.41669 6.67782 6.41669 6.99999C6.41669 7.32216 6.67785 7.58332 7.00002 7.58332Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.00002 3.50001C7.32219 3.50001 7.58335 3.23884 7.58335 2.91668C7.58335 2.59451 7.32219 2.33334 7.00002 2.33334C6.67785 2.33334 6.41669 2.59451 6.41669 2.91668C6.41669 3.23884 6.67785 3.50001 7.00002 3.50001Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.00002 11.6667C7.32219 11.6667 7.58335 11.4055 7.58335 11.0833C7.58335 10.7612 7.32219 10.5 7.00002 10.5C6.67785 10.5 6.41669 10.7612 6.41669 11.0833C6.41669 11.4055 6.67785 11.6667 7.00002 11.6667Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      <ul slot="content">
        <li><button>Dela till Facebook</button></li>
      </ul>
    </context-menu>
</div>
<div style="position:relative;">
<img-thumbnail src="https://ik.imagekit.io/demo/resp-img/image6.jpg?tr=w-800,h-600,f-png" width="240" height="135" alt="Picture" loaded=""></img-thumbnail>
<context-menu aria-label="Settings menu">
      <svg slot="icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.00002 7.58332C7.32219 7.58332 7.58335 7.32216 7.58335 6.99999C7.58335 6.67782 7.32219 6.41666 7.00002 6.41666C6.67785 6.41666 6.41669 6.67782 6.41669 6.99999C6.41669 7.32216 6.67785 7.58332 7.00002 7.58332Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.00002 3.50001C7.32219 3.50001 7.58335 3.23884 7.58335 2.91668C7.58335 2.59451 7.32219 2.33334 7.00002 2.33334C6.67785 2.33334 6.41669 2.59451 6.41669 2.91668C6.41669 3.23884 6.67785 3.50001 7.00002 3.50001Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.00002 11.6667C7.32219 11.6667 7.58335 11.4055 7.58335 11.0833C7.58335 10.7612 7.32219 10.5 7.00002 10.5C6.67785 10.5 6.41669 10.7612 6.41669 11.0833C6.41669 11.4055 6.67785 11.6667 7.00002 11.6667Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      <ul slot="content">
        <li><button>Dela till Facebook</button></li>
      </ul>
    </context-menu>
</div>
<div style="position:relative;">
<img-thumbnail src="https://ik.imagekit.io/demo/img/girl.jpeg?tr=w-800,h-600,f-png" width="240" height="135" alt="Picture" loaded=""></img-thumbnail>
<context-menu aria-label="Settings menu">
      <svg slot="icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.00002 7.58332C7.32219 7.58332 7.58335 7.32216 7.58335 6.99999C7.58335 6.67782 7.32219 6.41666 7.00002 6.41666C6.67785 6.41666 6.41669 6.67782 6.41669 6.99999C6.41669 7.32216 6.67785 7.58332 7.00002 7.58332Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.00002 3.50001C7.32219 3.50001 7.58335 3.23884 7.58335 2.91668C7.58335 2.59451 7.32219 2.33334 7.00002 2.33334C6.67785 2.33334 6.41669 2.59451 6.41669 2.91668C6.41669 3.23884 6.67785 3.50001 7.00002 3.50001Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.00002 11.6667C7.32219 11.6667 7.58335 11.4055 7.58335 11.0833C7.58335 10.7612 7.32219 10.5 7.00002 10.5C6.67785 10.5 6.41669 10.7612 6.41669 11.0833C6.41669 11.4055 6.67785 11.6667 7.00002 11.6667Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      <ul slot="content">
        <li><button>Dela till Facebook</button></li>
      </ul>
    </context-menu>
</div>
<div style="position:relative;">
<img-thumbnail src="https://ik.imagekit.io/demo/img/bike-image.jpeg?tr=w-800,h-600,f-png" width="240" height="135" alt="Picture" loaded=""></img-thumbnail>
<context-menu aria-label="Settings menu">
      <svg slot="icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.00002 7.58332C7.32219 7.58332 7.58335 7.32216 7.58335 6.99999C7.58335 6.67782 7.32219 6.41666 7.00002 6.41666C6.67785 6.41666 6.41669 6.67782 6.41669 6.99999C6.41669 7.32216 6.67785 7.58332 7.00002 7.58332Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.00002 3.50001C7.32219 3.50001 7.58335 3.23884 7.58335 2.91668C7.58335 2.59451 7.32219 2.33334 7.00002 2.33334C6.67785 2.33334 6.41669 2.59451 6.41669 2.91668C6.41669 3.23884 6.67785 3.50001 7.00002 3.50001Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7.00002 11.6667C7.32219 11.6667 7.58335 11.4055 7.58335 11.0833C7.58335 10.7612 7.32219 10.5 7.00002 10.5C6.67785 10.5 6.41669 10.7612 6.41669 11.0833C6.41669 11.4055 6.67785 11.6667 7.00002 11.6667Z" stroke="#61646C" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      <ul slot="content">
        <li><button>Dela till Facebook</button></li>
      </ul>
    </context-menu>
</div>
</div>

  </main>

  <div style="display:none">

      {% for post in collections.posts reversed %}
        <a href="{{ post.url }}">

        <h2>{{ post.data.title }}</h2>
        <time>{{ post.data.date | date: "%B %d, %Y" }}</time>
        </a>
      {% endfor %}

    </div>

  </main>
