import { html, render } from 'https://cdn.skypack.dev/lit-html';
import App from '../../app.js';
customElements.define('sidebar-toggle', class extends HTMLElement {

  constructor() {
    super();

    this.attachShadow({ mode: 'open', delegatesFocus: false });
    this.render();
    this.bindEvents();
  }

  bindEvents() {
    const { shadowRoot } = this;
    /* Toggle side bar */
    shadowRoot.querySelector("button")?.addEventListener('click', (e) => {
      App.preferences = {
        ...App.preferences,
        ...{ showSidePane: !App.preferences?.showSidePane }
      }
      e.currentTarget.setAttribute('aria-expanded', App.preferences?.showSidePane);
    });
  }

  render() {
    render(this.template, this.shadowRoot, { eventContext: this });
  }

  get template() {
    return html`
      <style>
        :host-context(.new, .preferences) {
          display:none;
        }

        button {
          position: relative;

          display: flex;

          align-items: center;

          justify-content: center;

          min-width: 28px;
          height: 28px;
          padding: 0px;

          color: var(--color-control-backface);

          background-color: transparent;
          border: none;

          border-radius: var(--radius-2);

          box-shadow: none;

          cursor: pointer;

          transition: background 250ms var(--easing-decelerate);

          will-change: background;
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

          stroke-width: var(--stroke-width-thin);
        }
      </style>
      <button type="button" aria-label="Toggle sidebar" aria-controls="sidebar" aria-expanded="${App.preferences?.showSidePane || false}">
        <svg class="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.33333 14L12.6667 14C13.403 14 14 13.403 14 12.6667L14 3.33333C14 2.59695 13.403 2 12.6667 2L3.33333 2C2.59695 2 2 2.59695 2 3.33333L2 12.6667C2 13.403 2.59695 14 3.33333 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M10 14L10 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
    `;
  }
 });