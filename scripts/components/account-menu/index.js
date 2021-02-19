import { html, render } from 'https://cdn.skypack.dev/lit-html';

customElements.define('account-menu', class extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open', delegatesFocus: false });
    this.render();
    this.bindEvents();
  }

  connectedCallback() {

  }

  bindEvents() {
    window.addEventListener('offline', () => this.render());

    window.addEventListener('online', () => this.render());
  }

  render() {
    render(this.template, this.shadowRoot, { eventContext: this });
  }

  get template() {
    return html`
      <style>
        :host {
          z-index: var(--layer-top);

          color: rgb(98, 102, 109);

          border-radius: var(--radius-2);

          transition: color 150ms, background-color 150ms;

          outline: none;

        }

        :host(:hover) {
          color: rgb(215, 216, 219);

          background-color: rgb(45, 47, 54);
        }

        img {
          border-radius: var(--radius-round);
        }

        [slot="icon"] {
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;
          width: 51px;
          height: 34px;
          padding: var(--spacing-000);

          border-radius: var(--radius-2);
          place-items: center;
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

        ul :nth-last-child(2),
        ul :nth-last-child(5) {
          padding-bottom: 4px;

          border-bottom: solid 1px rgb(48, 50, 54);
        }

        ul :nth-last-child(2) + li,
        ul :nth-last-child(5) + li {
          padding-top: 4px;
        }

        .avatar {
          position: relative;

          width:18px;
          height: 18px;
        }

        .indicator {
          position: absolute;
          right: -2px;
          bottom: -2px;

          width: 8px;
          height: 8px;

          border: 1px solid rgb(31, 32, 35);
          border-radius: 50%;

          transition: background-color 500ms ease 0s;
        }

        .online {
          background-color: rgb(76, 183, 130);
        }

        .offline {
          background-color: var(--color-neutral-400);
        }

      </style>
      <context-menu aria-label="Account menu" role="menu">
        <div slot="icon">
          <div class="avatar">
            <img src="https://ik.imagekit.io/brickpile/tr:w-18,h-18/attachments/users%2f1/icon.jpeg" width="18" height="18" />
            <span class="indicator ${window.navigator.onLine ? 'online' : 'offline'}"></span>
          </div>
          <svg width="9" height="5" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.74658 1.37677L7.74658 7.37677L13.7466 1.37677" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <ul slot="content">
          <li><a href="/preferences">View profile</a></li>
          <li><a href="/changelog">Settings</a></li>
          <li><a href="/auth/exit" target="_blank">Download desktop app</a></li>
          <li><a href="/settings">Show keyboard shortcuts</a></li>
          <li><a href="/settings">Changelog</a></li>
          <li><a href="/settings">Join Slack community</a></li>
          <li><a href="/help">Help & Support</a></li>
          <li><a href="/settings">Log out</a></li>
        </ul>
      </context-menu>
    `;
  }
});
