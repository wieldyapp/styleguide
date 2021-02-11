import { html, render } from 'https://cdn.skypack.dev/lit-html';

// stylesheet
// ===============================================================================================

const css = `
  :host {
    border-radius: var(--radius-2);
    z-index: var(--layer-top);
    color: rgb(98, 102, 109);
    transition: color 150ms, background-color 150ms;
  }

  :host(:hover) {
    background-color: rgb(45, 47, 54);
    color: rgb(215, 216, 219);
  }

  img {
    border-radius: var(--radius-round);
  }

  [slot="icon"] {
    display: flex;
    place-items: center;
    justify-content: space-between;
    width: 51px;
    height: 34px;
    border-radius: var(--radius-2);
    padding: var(--spacing-000);
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    border-radius: var(--radius-2);
    box-shadow: var(--elevation-2);
  }

  li {
    margin: 0;

    background: rgb(39, 40, 43);
  }

  li:first-child {
    padding-top:4px;

    border-top-left-radius: var(--radius-2);
    border-top-right-radius: var(--radius-2);
  }

  li:first-child:hover::after {
    border-bottom-color: rgb(45, 47, 54);
  }

  li:last-child {
    padding-bottom:4px;

    border-bottom-right-radius: var(--radius-2);
    border-bottom-left-radius: var(--radius-2);
  }

  a {
    display: flex;
    place-items: center;

    padding: 6px 12px;
  }

  a:any-link {
    color: var(--color-neutral-300);
    font-weight: var(--font-weight-regular);
    font-size: var(--scale-1);
    text-decoration: none;
  }

  li:hover {
    background-color: rgb(45, 47, 54);
  }

  ul :nth-last-child(2) {
    padding-bottom: 4px;

    border-bottom: solid 1px rgb(48, 50, 54);
  }

  ul :nth-last-child(2) + li {
    padding-top: 4px;
  }

  .avatar {
    position: relative;
    height: 18px;
    width:18px;
  }

  .indicator {
    transition: background-color 500ms ease 0s;
    border-radius: 50%;
    border: 1px solid rgb(31, 32, 35);
    position: absolute;
    width: 8px;
    height: 8px;
    bottom: -2px;
    right: -2px;
  }

  .online {
    background-color: rgb(76, 183, 130);
  }

  .offline {
    background-color: var(--color-neutral-400);
  }
`;

customElements.define('account-menu', class extends HTMLElement {

  constructor() {
    super();

    this.attachShadow({ mode: 'open', delegatesFocus: false });
    this.render();
    this.bindEvents();
  }

  connectedCallback() { }

  bindEvents() {
    window.addEventListener('offline', () => this.render());

    window.addEventListener('online', () => this.render());
  }

  render() {
    render(this.template, this.shadowRoot, { eventContext: this });
  }

  get template() {
    return html`
      <style>${css}</style>
      <context-menu aria-label="Account menu" role="menu">
        <div slot="icon">
          <div class="avatar">
            <img src="https://ik.imagekit.io/brickpile/tr:w-18,h-18/attachments/users%2f1/icon.jpeg" width="18" height="18" />
            <span class="indicator ${window.navigator.onLine ? 'online': 'offline'}"></span>
          </div>
          <svg width="9" height="5" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.74658 1.37677L7.74658 7.37677L13.7466 1.37677" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <ul slot="content">
          <li><a href="/preferences">Settings</a></li>
          <li><a href="//${document.location.host.split('.').splice(1).join('.')}/changelog">Changelog</a></li>
          <li><a href="/auth/exit" target="_blank">Logout</a></li>
          <li><a href="/settings">Keyboard shortcuts</a></li>
          <li><a href="/settings">Join Wieldy Slack</a></li>
          <li><a href="/settings">Send feedback</a></li>
          <li><a href="/settings">Refer to Wieldy</a></li>
        </ul>
      </context-menu>
    `;
  }
 });