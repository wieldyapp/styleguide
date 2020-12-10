customElements.define('hello-world', class extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    alert('connected');
  }
});