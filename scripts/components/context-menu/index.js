const css = `

  :host {
    display: flex;
  }

  summary::-webkit-details-marker {
    display: none
  }

  summary {
    height: 100%;
    width:100%;
    display: flex;
    place-content: center;
    align-items: center;
    border: solid 1px var(--context-menu-border-color);
    background-color: var(--context-menu-backface);
    border-radius: var(--context-menu-border-radius);
    box-sizing: border-box;
    transition: background-color 150ms var(--easing-standard);
  }

  summary:hover,
  summary:focus,
  summary:active {
    background-color: var(--context-menu-backface-hover);
  }

  summary:focus-visible {
    outline: -webkit-focus-ring-color auto 5px;
  }

  details {
    width:100%;
    cursor: pointer;
    position: relative;
  }

  details[open] summary ~ * {
    animation: open 70ms cubic-bezier(.25,.46,.45,.94);
    position: absolute;
    width: 200px;
    transform-origin: 100% 0;
    transition-property: transform, opacity;

    left: var(--context-menu-left);
    right: var(--context-menu-right);
    z-index: var(--layer-top);
    position: fixed;
  }

  /* Fix for Safari */
  slot[name=icon] {
    display: flex;
    justify-content: center;
    place-items: center;
    height: 100%;
  }

  @keyframes open {
    0% {
      opacity: 0;
      transform: scale(.9);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`;

const html = `
  <details>
    <summary part="sum">
      <slot name="icon"></slot>
    </summary>
    <nav>
      <slot name="content"></slot>
    </nav>
  </details>
`;

export default class ContextMenu extends HTMLElement {

  constructor(...args) {
    const self = super(...args);

    this.attachShadow({ mode: 'open', delegatesFocus: true });
    this.shadowRoot.innerHTML = `<style>${css}</style>${html}`;

    this.details_ = this.shadowRoot.querySelector('details');
    this.summary_ = this.shadowRoot.querySelector('summary');

    this.summary_.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    document.addEventListener('click', () => this.details_.removeAttribute('open'));

  }

  connectedCallback() {
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if(attrName === 'aria-label') {
      this.summary_.setAttribute('aria-label', newVal);
    }
    if(attrName === 'open') {
      this.details_.setAttribute('open', '');
    }
  }

  disconnectedCallback() {
    // console.log('Custom element removed from page.');
  }

  adoptedCallback() {
    // console.log('Custom element moved to new page.');
  }

  close() {
    this.details_.removeAttribute('open');
  }

  static get observedAttributes() {
    return ["aria-label", "open"];
  }
}

customElements.define('context-menu', ContextMenu);