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
      ${document.body.classList.contains('unsplash') ? html`
      <button type="button" aria-label="Show thumbnails as square or in full aspect ratio" aria-controls="images" aria-expanded="false">
        <svg width="16" height="10" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 1H3C1.89543 1 1 1.97005 1 3.16667V11.8333C1 13.03 1.89543 14 3 14H17C18.1046 14 19 13.03 19 11.8333V3.16667C19 1.97005 18.1046 1 17 1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <input type=range min=5 max=15 />
      ` : '' }
      <new-button></new-button>
      <sidebar-toggle></sidebar-toggle>
    `;
  }
}

customElements.define("tool-bar", Toolbar);