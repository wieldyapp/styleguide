import App from './app.js';
import { html, render } from 'https://cdn.skypack.dev/lit-html';

class Toolbar extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.bindEvents();
  }

  render() {
    render(this.template, this, { eventContext: this });
  }

  bindEvents() {
    window.addEventListener('storage', () => this.render());
  }

  get template() {
    return html`
      <button type="button" aria-label="Show thumbnails as square or in full aspect ratio" aria-controls="images" aria-expanded="false" style="visibility:hidden;">
        <svg width="16" height="10" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 1H3C1.89543 1 1 1.97005 1 3.16667V11.8333C1 13.03 1.89543 14 3 14H17C18.1046 14 19 13.03 19 11.8333V3.16667C19 1.97005 18.1046 1 17 1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <input type=range min=5 max=15 style="visibility:hidden;" />
      <new-button></new-button>
      <button type="button" aria-label="Toggle sidebar" aria-controls="sidebar" aria-expanded="${App.preferences?.showSidePane}">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.33333 14L12.6667 14C13.403 14 14 13.403 14 12.6667L14 3.33333C14 2.59695 13.403 2 12.6667 2L3.33333 2C2.59695 2 2 2.59695 2 3.33333L2 12.6667C2 13.403 2.59695 14 3.33333 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M10 14L10 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
    `;
  }
}

customElements.define("tool-bar", Toolbar);
