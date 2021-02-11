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

  [slot="icon"] {
    display: flex;
    place-items: center;
    justify-content: space-between;
    width: auto;
    height: 34px;
    border-radius: var(--radius-2);
    padding: var(--spacing-000);
    box-sizing: border-box;
  }

  ::slotted(img) {
    margin-right: 8px;
  }

  ::slotted(span) {
    color: var(--color-neutral-200);
    font-size: var(--scale-1);
  }

  a {
    display: flex;
    place-items: center;

    padding: 6px 12px;

    background-repeat: no-repeat;
    background-position: right 10px center;
    background-origin: border-box;
    border-radius: 4px;
  }

  li:nth-child(2) a {
    background-image: url('data:image/svg+xml;utf8, <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.97902 1.68793L3.31236 5.35459L1.64569 3.68793" stroke="rgb(110, 121, 214)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  }

  a:any-link {
    color: var(--color-neutral-300);
    font-weight: var(--font-weight-regular);
    font-size: var(--scale-1);
    text-decoration: none;
  }

  ul {
    margin: 8px 0 0;
    padding: 0;
    list-style: none;
    border-radius: var(--radius-2);
    box-shadow: var(--elevation-2);
  }

  li {
    padding: 0 8px;

    background: rgb(39, 40, 43);
  }

  li img {
    margin-right: 8px;
  }

  li:first-child {
    padding-top:8px;

    border-top-left-radius: var(--radius-2);
    border-top-right-radius: var(--radius-2);
  }

  li:first-child:hover::after {
    border-bottom-color: rgb(45, 47, 54);
  }

  li:last-child {
    padding-bottom:8px;

    border-bottom-right-radius: var(--radius-2);
    border-bottom-left-radius: var(--radius-2);
  }

  ul :nth-last-child(5) {
    padding-bottom: 4px;

    border-bottom: solid 1px rgb(48, 50, 54);
  }

  ul :nth-last-child(5) + li {
    padding-top: 8px;
  }

  ul :nth-last-child(-n+4) a {
    color: var(--color-neutral-300);
    font-size: 12px;
    background: none;
  }

  ul :nth-last-child(2) {
    padding-bottom: 8px;

    border-bottom: solid 1px rgb(48, 50, 54);
  }

  ul :nth-last-child(2) + li {
    padding-top: 8px;
  }

  ul a:hover,
  ul a:focus,
  ul a:active {
    background-color: rgb(45, 47, 54);
  }
`;
customElements.define("workspace-menu", class extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open', delegatesFocus: false });
      this.render();
      this.bindEvents();
    }

    connectedCallback() {

    }

    bindEvents() {

    }

    render() {
      render(this.template, this.shadowRoot, { eventContext: this });
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
      <context-menu aria-label="Workspace menu" role="menu">
        <div slot="icon">
          <slot name="icon"></slot>
          <slot name="name"></slot>
        </div>
        <ul slot="content">
        ${this.workspaces.map((workspace) => html`
          <li>
            ${window.location.hostname.includes(workspace.domain) ?
              html`<span><img src="${workspace.icon}" width="16" height="16" alt />${workspace.name}</span>` :
              html`<a href="https://${workspace.domain}.wieldy.local:5001" data-id="${workspace.id}" @click=${this.save}><img src="${workspace.icon}" width="16" height="16" alt />${workspace.name}</a>`}
          </li>
        `)}
          <li>
            <a href="/">Workspace settings</a>
          </li>
          <li>
            <a href="/">Create or join a workspace</a>
          </li>
          <li>
            <a href="/">Add account</a>
          </li>
          <li>
            <a href="/">Log out</a>
          </li>
        </ul>
      </context-menu>`;
    }

    save(e) {
      console.log('switch');
    }
  }
);