customElements.define('hello-world', class extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log('connected');
  }
});