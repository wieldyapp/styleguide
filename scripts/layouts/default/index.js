
import { html, render } from 'https://cdn.skypack.dev/lit-html';

export default class Default extends HTMLElement {
  constructor() {
    super();

    // this.render();
    // this.bindEvents();
  }

  render() {
    render(this.template, this, { eventContext: this });
  }

  bindEvents() {

  }

  get template() {
    return html``;
  }
}
customElements.define('layout-default', Default);