
const initialized = new WeakMap();

export default class DetailsDialog extends HTMLElement {

  constructor() {
    super();
    initialized.set(this, { details: null, activeElement: null });
  }

  connectedCallback() {

    const state = initialized.get(this);
    if (!state) return;

    const details = this.parentElement;
    if (!details) return;

    state.details = details

    // if(this.dataset.keyCode)
    //   c.register(this.dataset.keyCode, (event) => this.open(event));

    details.addEventListener('click', ({currentTarget}) =>
      !currentTarget.hasAttribute('open') && this.open(event));

  }

  attributeChangedCallback(attrName, oldVal, newVal) {
  }

  disconnectedCallback() {
  }

  adoptedCallback() {
  }

  static get observedAttributes() { return []; }

  open(event) {

    event?.preventDefault();

    const state = initialized.get(this);

    const details = state.details;
    if (!(details instanceof Element)) return;

    if(!details.hasAttribute('open')) {
      details.setAttribute('open','');
    }

    const dialog = details.querySelector('dialog');
    if (!(dialog instanceof HTMLDialogElement)) return;

    if (document.activeElement) {
      initialized.set(dialog, { details, activeElement: document.activeElement });
    }

    dialog.showModal();

    dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      this.close(event);
    });

    dialog.addEventListener('close', (event) => {
      event.preventDefault();
      this.close(event);
    });

  }

  close(event) {

    const state = initialized.get(this);

    const details = state.details;

    const dialog = details.querySelector('dialog');
    if (!(dialog instanceof HTMLDialogElement)) return;

    const summary = details.querySelector('summary');

    if (dialog.hasAttribute('open')) {

      dialog.classList.add('hide');

      dialog.addEventListener('animationend', function closeDialog() {
        dialog.classList.remove('hide');
        dialog.close();
        details.removeAttribute('open');
        summary.focus();
        dialog.removeEventListener('animationend', closeDialog, false);
      }, false);
    }

  }

}

customElements.define('details-dialog', DetailsDialog);