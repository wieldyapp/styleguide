---
title: This is my second post
date: 2020-02-01
layout: base.liquid
className: settings
---

<style>

  .container {
    max-width: var(--width-6);
    margin: 0 auto;
  }

  .container > p {
    margin-top: var(--spacing-000);

    padding-bottom: var(--spacing-000);

    color: var(--color-neutral-300);

    border-bottom: solid 1px var(--main-border-color);

  }

  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    padding-bottom: 24px;

    border-bottom: 1px solid rgb(48, 50, 54);
  }

</style>

<main>
  <div class="container">
    <h1 class="headline">Preferences</h1>
    <p>Manage your Wieldy profile</p>
    <h2 style="font-weight: var(--font-weight-regular);font-size: var(--scale-3)">Feature toggle</h2>
    <div class="box">
        <div>
          <h3 style="font-weight: var(--font-weight-regular);font-size: var(--scale-1)">Interface theme</h3>
          <p style="color:var(--color-neutral-300);">Select your interface color theme</p>
        </div>
        <div>
          <input type=checkbox />
        </div>
      </div>
  </div>
</main>

<script>
  const container = document.querySelector('.container');
  const checkbox = container.querySelector('input[type=checkbox]');
  checkbox.addEventListener('change', (e) => {
    console.log(e);
  });
</script>