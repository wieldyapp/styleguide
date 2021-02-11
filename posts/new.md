---
title: This is my second post
date: 2020-02-01
layout: base.liquid
className: new
---

<style>

  .new__details {
    display:flex;
  }

  .new__status {

    height: 100%;

    background-color: rgb(39, 40, 43);
  }

  .new__status > div {
    display: flex;
    flex-direction: row;
    height: var(--spacing-2);
    margin-bottom: var(--spacing-0);
    place-items: center;
  }

  .new__status > div div:first-child {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    width: 90px;
  }

  .new__status > div div:last-child input {

    height: 36px;

    padding-right: 8px;
    padding-left: 8px;

    color: rgb(215, 216, 219);

    background: transparent;
    border:0;
    border: solid 1px transparent;

  }

  .new__status > div div:last-child input:hover,
  .new__status > div div:last-child input:focus,
  .new__status > div div:last-child input:active {
    background-color: rgb(31, 32, 35);

    border-top-color: rgb(48, 50, 54);
    border-top-width: 1px;
    border-top-style: solid;
    border-right-color: rgb(48, 50, 54);
    border-right-width: 1px;
    border-right-style: solid;
    border-bottom-color: rgb(48, 50, 54);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-left-color: rgb(48, 50, 54);
    border-left-width: 1px;
    border-left-style: solid;
  }

  .new__status label {
    color: var(--color-neutral-400);
  }

</style>
<main>
  <form>
    <div class="new__details">
      <input type=text placeholder="Type your name ..." autofocus style="font-size: var(--scale-3)" />
    </div>
  </form>
</main>

{% include aside.liquid %}