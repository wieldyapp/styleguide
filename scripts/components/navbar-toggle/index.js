import { html, render } from 'https://cdn.skypack.dev/lit-html';
import App from '../../app.js';

// stylesheet
// ===============================================================================================

const css = `

  button {

    position: relative;

    left: -8px;

    z-index: var(--layer-3);

    align-items: center;

    justify-content: center;

    min-width: 28px;
    height: 28px;
    padding: 0px;

    color: var(--color-control-backface);

    background-color: transparent;
    border: none;

    border-radius: var(--radius-1);

    box-shadow: none;

    visibility: hidden;

    cursor: pointer;
  }

  @media (max-width: 1023px) {
    button {
      display: inline-flex;

      visibility: visible;
    }
  }

  button:hover {

    color: #8A8F98;

    background: #27282B;

  }

  button[aria-expanded="true"] {
    color: #8A8F98;

    background: #27282B;
  }

  .icon {
    color: var(--color-control-backface);

    stroke-width: var(--stroke-width-medium);
  }
`;

customElements.define('navbar-toggle', class extends HTMLElement {

  constructor() {
    super();

    this.attachShadow({ mode: 'open', delegatesFocus: false });
    this.render();
    this.bindEvents();
  }

  connectedCallback() {

  }

  bindEvents() {
    const { shadowRoot } = this;
    /* Toggle nav bar */
    shadowRoot.querySelector('button')?.addEventListener('click', (e) => {
      /**
       * TODO only set localStorage property
       */
      e.currentTarget.setAttribute('aria-expanded', document.querySelector('nav')?.toggleAttribute('data-open'));
    });
  }

  render() {
    render(this.template, this.shadowRoot, { eventContext: this });
  }

  get template() {
    return html`
      <style>${css}</style>
      <button type="button" aria-label="Toggle navigation" aria-controls="nav" aria-expanded="false">
        <svg class="icon" width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.08797 9.04559H16.588" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M3.08797 4.54559H16.588" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M3.08797 13.5456H16.588" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
    `;
  }
 });