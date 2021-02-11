---
title: This is my second post
date: 2020-02-01
layout: base.liquid
className: new
---

<main>
  <h1>Start page</h1>
  <element-details></element-details>
</main>

<template id="start-page">
  <form>
    <div class="new__details">
      <input type=text placeholder="Type your name ..." autofocus style="font-size: var(--scale-3)" />
    </div>
  </form>
</template>

<script>
  customElements.define('element-details',
    class extends HTMLElement {
      constructor() {
        super();
        const template = document
          .getElementById('start-page')
          .content;
        const shadowRoot = this.attachShadow({mode: 'open'})
          .appendChild(template.cloneNode(true));
      }
    }
  );
</script>

{% include aside.liquid %}