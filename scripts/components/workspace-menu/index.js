import { html, render } from 'https://cdn.skypack.dev/lit-html';

const css = `
  :host {
    border-radius: var(--radius-2);
    z-index: var(--layer-top);
    color: rgb(98, 102, 109);
    transition: color 150ms, background-color 150ms;
    position: relative;
    left: -8px;
  }

  :host(:hover) {
    background-color: rgb(45, 47, 54);
    color: rgb(215, 216, 219);
  }

  a:any-link {
    color: rgb(247, 248, 248);
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin:0;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary {
    display: flex;
    align-items: center;
    padding: 8px 12px 8px 8px;
    border-radius: 4px;
  }

  ::slotted(img) {
    margin-right: 8px;
  }
  ::slotted(span) {
    color: var(--color-neutral-200);
    font-size: var(--scale-1);
  }

  details[open] summary ~ * {
    animation: open 70ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: absolute;
    transform-origin: 100% 0;
    transition-property: transform, opacity;
    will-change: transform, opacity;
    z-index: var(--layer-top);
    position:fixed;
  }

  nav {
    border-radius: var(--radius-2);
    box-shadow: var(--elevation-2);
    background: rgb(39, 40, 43);
    border-radius: 4px;
    overflow: hidden;
    width: 250px;
    margin-top: 8px;
    padding: 8px 0;
  }

  nav a {
    display: block;
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-origin: border-box;
    background-image: url('data:image/svg+xml;utf8, <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.97902 1.68793L3.31236 5.35459L1.64569 3.68793" stroke="rgb(110, 121, 214)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    border-radius: 4px;
  }

  nav span {
    display:inline-block;
  }

  nav img {
    margin-right: 8px;
  }

  nav a, nav span {
    padding: 6px 12px;
    display: flex;
    align-items: center;
  }

  nav li a:hover {
    background-color: rgb(60, 60, 64);
  }

  li {
    padding: 0 8px;
  }

  ul :nth-last-child(5) {
    padding-bottom: 4px;

    border-bottom: solid 1px rgb(48, 50, 54);
  }

  ul :nth-last-child(5) + li {
    padding-top: 4px;
  }

  ul :nth-last-child(-n+4) a {
    color: var(--color-neutral-300);
    font-size: 12px;
    background: none;
  }

  ul :nth-last-child(2) {
    padding-bottom: 4px;

    border-bottom: solid 1px rgb(48, 50, 54);
  }

  ul :nth-last-child(2) + li {
    padding-top: 4px;
  }

  @keyframes open {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }

`;

customElements.define("workspace-menu", class extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open", delegateFocus: false });
    }

    connectedCallback() {
      this.render();
    }

    async render() {

      render(this.template, this.shadowRoot, { eventContext: this });

      this.details_ = this.shadowRoot.querySelector('details');
      this.summary_ = this.shadowRoot.querySelector('summary');

      this.bindEvents();
    }

    bindEvents() {
      this.summary_.addEventListener('click', (e) => e.stopPropagation());
      document.addEventListener('click', () => this.details_.removeAttribute('open'));
    }

    set workspaces(value) {
      this._workspaces = value;
    }

    get workspaces() {
      // return this._workspaces.sort((a, b) => b.name - a.name);

      return [
        {
          domain: 'wieldy.app',
          name: 'Wieldy',
          id: '23',
          icon: 'https://uploads.linear.app/6b398a37-b7c2-4de1-922a-15b40a22f010/e6b87a60-768b-4d02-be70-28f9bd256371/256x256/256.png'
        },
        {
          domain: 'wieldy.app',
          name: 'Encom',
          id: '23',
          icon: 'https://uploads.linear.app/6b398a37-b7c2-4de1-922a-15b40a22f010/e6b87a60-768b-4d02-be70-28f9bd256371/256x256/256.png'
        },
        {
          domain: 'wieldy.app',
          name: 'Nimble Initiatives',
          id: '23',
          icon: 'https://uploads.linear.app/6b398a37-b7c2-4de1-922a-15b40a22f010/e6b87a60-768b-4d02-be70-28f9bd256371/256x256/256.png'
        }
      ]
    }

    get template() {
      return html`
        <style>${css}</style>
        <details>
          <summary>
            <slot name="icon"></slot>
            <slot name="name"></slot>
          </summary>
          <nav>
            <ul>
              ${this.workspaces.map((workspace) => html`
                <li>
                  ${window.location.hostname.includes(workspace.domain) ?
          html`<span><img src="${workspace.icon}" width="16" height="16" alt />${workspace.name}</span>` :
          html`<a href="https://${workspace.domain}.wieldy.local:5001" data-id="${workspace.id}" @click=${this.save}><img src="${workspace.icon}" width="16" height="16" alt />${workspace.name}</a>`}
                </li>
              `)}
              <li>
                <a href="">Workspace settings</a>
              </li>
              <li>
                <a href="">Create or join a workspace</a>
              </li>
              <li>
                <a href="">Add account</a>
              </li>
              <li>
                <a href="/">Log out</a>
              </li>
            </ul>
          </nav>
        </details>`
    }

    save(e) {
      console.log('switch');
    }
  }
);