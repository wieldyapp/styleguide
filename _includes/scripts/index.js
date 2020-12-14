customElements.define('hello-world', class extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<button></button>`;
    foo();
  }
});