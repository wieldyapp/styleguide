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

</style>

<main>
  <div class="container">
    <div class="headline">
      <h1 class="headline__heading">Preferences</h1>
      <p class="headline__description">Manage your preferences</p>
    </div>
    <h2 class="heading-medium">Display</h2>
    <div class="feature">
      <div>
        <h3 class="feature__heading">Reduce motion and animations</h3>
        <p class="feature__description">Reduce motion in the user interface by disabling animations.</p>
      </div>
      <div>
        <toggle-switch></toggle-switch>
      </div>
    </div>
    <div class="feature">
      <div>
        <h3 class="feature__heading">Display full names</h3>
        <p class="feature__description">Show full names of users instead of shorter display names.</p>
      </div>
      <div>
        <toggle-switch disabled></toggle-switch>
      </div>
    </div>
    <div class="feature">
      <div>
        <h3 class="feature__heading">Use pointer cursors</h3>
        <p class="feature__description">Change the cursor to a pointer when hovering over any interactive element.</p>
      </div>
      <div>
        <toggle-switch checked></toggle-switch>
      </div>
    </div>
    <h2 class="heading-medium">Theme</h2>
    <div class="feature">
      <div>
        <h3 class="feature__heading">Interface theme</h3>
        <p class="feature__description">Select your interface color theme</p>
      </div>
      <div>
        <div class="select">
          <select>
            <option value="system">System preference</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="custom">Custom</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</main>
