
import { html, render } from 'https://cdn.skypack.dev/lit-html';

export default class Workspace extends HTMLElement {
  constructor() {
    super();

    this.render();
    this.bindEvents();
  }

  render() {
    render(this.template, this, { eventContext: this });
  }

  bindEvents() {

  }

  get template() {
    return html`
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
      <aside id=sidebar is="resizable-aside"></aside>
    `;
  }
}
customElements.define('view-workspace', Workspace);