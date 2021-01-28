---
layout: base.liquid
---

<main>
  <div>
    <div class="iframe">
      <iframe
        is=my-iframe
        srcdoc="<p>Hello, world</p>"
        name="preview"
        width="414"
        height="736"
      ></iframe>
    </div>
  </div>
</main>

{% include aside.liquid %}