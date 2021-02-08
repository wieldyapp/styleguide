import { html, render } from 'https://cdn.skypack.dev/lit-html';

customElements.define('new-button', class extends HTMLElement {

  constructor() {
    super();

    this.attachShadow({ mode: 'open', delegatesFocus: false });
    this.render();

  }

  connectedCallback() {
    const self = this;
  }

  render() {
    render(this.template, this.shadowRoot, { eventContext: this });
  }

  get template() {
    return html`
      <style>

        :host-context(.new) {
          display:none;
        }

        :host {
          display:flex;
          height: 28px;
        }

        :host > a {
          border: 0;
          background-color: transparent;
          display:flex;
          place-items: center;
          width: 30px;
          justify-content: center;
          border: solid 1px var(--color-primary-500);
          background-color: var(--color-primary-500);
          border-top-left-radius:var(--radius-2);
          border-bottom-left-radius:var(--radius-2);
          margin:0;
          margin-right: 1px;
          transition: background-color 150ms var(--easing-standard);
          box-shadow: var(--elevation-1);
        }

        :host > a:hover,
        :host > a:focus,
        :host > a:active {
          background-color: var(--color-primary-400);
          cursor: pointer;
        }

        context-menu {
          width: 23px;
          box-shadow: var(--elevation-1);
          border-bottom-right-radius: var(--radius-2);
          border-top-right-radius: var(--radius-2);
        }

        context-menu ul {
          margin: 0;
          padding: 0;

          list-style: none;
          border-radius: var(--radius-2);
          /*box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 10px;*/
          box-shadow: var(--elevation-2);
        }

        context-menu li:first-child {
          border-top-left-radius: var(--radius-2);
          border-top-right-radius: var(--radius-2);
          padding-top:4px;
        }

        context-menu li:first-child:hover::after {
          border-bottom-color: rgb(45, 47, 54);
        }

        context-menu li:last-child {
          border-bottom-right-radius: var(--radius-2);
          border-bottom-left-radius: var(--radius-2);
          padding-bottom:4px;
        }

        context-menu li {
          background: rgb(39, 40, 43);
        }

        context-menu a {
          display: flex;
          place-items: center;
          padding: 6px 12px;
        }

        context-menu a:any-link {
          /*color: var(--color-neutral-100);*/
          color: rgb(247, 248, 248);
          font-weight: var(--font-weight-regular);
          font-size: var(--scale-1);
          text-decoration: none;
        }

        context-menu li:hover {
          background-color: rgb(45, 47, 54);
        }

        context-menu:not(:defined) {
          visibility: hidden;
        }

        context-menu:defined {
          visibility: visible;
        }

        context-menu ul :nth-last-child(2) {
          padding-bottom: 4px;

          border-bottom: solid 1px rgb(48, 50, 54);
        }

        context-menu ul :nth-last-child(2) + li {
          padding-top: 4px;
        }

        context-menu ul svg {
          margin-right: var(--spacing-000);
          stroke: #8A8F98;
        }

        context-menu a:any-link:hover svg {
          stroke: currentColor;
        }

      </style>
      <a href="/new">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
      <context-menu>
        <svg slot="icon" width="13" height="9" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.74658 9.37677L12.7466 15.3768L18.7466 9.37677" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <ul slot="content">
          <li>
            <a href="/new">
              <svg width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.7456 9.05536H11.7456C10.641 9.05536 9.74561 9.95079 9.74561 11.0554V20.0554C9.74561 21.1599 10.641 22.0554 11.7456 22.0554H20.7456C21.8502 22.0554 22.7456 21.1599 22.7456 20.0554V11.0554C22.7456 9.95079 21.8502 9.05536 20.7456 9.05536Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.74561 15.0554H4.74561C4.21517 15.0554 3.70646 14.8446 3.33139 14.4696C2.95632 14.0945 2.74561 13.5858 2.74561 13.0554V4.05536C2.74561 3.52493 2.95632 3.01622 3.33139 2.64115C3.70646 2.26607 4.21517 2.05536 4.74561 2.05536H13.7456C14.276 2.05536 14.7847 2.26607 15.1598 2.64115C15.5349 3.01622 15.7456 3.52493 15.7456 4.05536V5.05536" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> Start page
            </a>
          </li>
          <li>
            <a href="/">
              <svg width="15" height="15" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.7456 9.05536H11.7456C10.641 9.05536 9.74561 9.95079 9.74561 11.0554V20.0554C9.74561 21.1599 10.641 22.0554 11.7456 22.0554H20.7456C21.8502 22.0554 22.7456 21.1599 22.7456 20.0554V11.0554C22.7456 9.95079 21.8502 9.05536 20.7456 9.05536Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.74561 15.0554H4.74561C4.21517 15.0554 3.70646 14.8446 3.33139 14.4696C2.95632 14.0945 2.74561 13.5858 2.74561 13.0554V4.05536C2.74561 3.52493 2.95632 3.01622 3.33139 2.64115C3.70646 2.26607 4.21517 2.05536 4.74561 2.05536H13.7456C14.276 2.05536 14.7847 2.26607 15.1598 2.64115C15.5349 3.01622 15.7456 3.52493 15.7456 4.05536V5.05536" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> Standard page
            </a>
          </li>
          <li>
            <a href="/">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> New template</a></li>
        </ul>
      </context-menu>
    `;
  }
 });