import { html, render } from 'https://cdn.skypack.dev/lit-html';

customElements.define('workspace-menu', class extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open', delegatesFocus: false });
    this.render();
    this.bindEvents();
  }
  connectedCallback() {
    const { shadowRoot } = this;
  }

  bindEvents() {

  }

  render() {
    render(this.template, this.shadowRoot, { eventContext: this });
  }

  get template() {
    return html`<span style="position:absolute; left:0;">Hello, world</span>`;
  }
});