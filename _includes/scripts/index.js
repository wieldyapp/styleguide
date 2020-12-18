// customElements.define(
//   'resize-bar',
//   class extends HTMLElement {
//     constructor() {
//       super();
//       this.attachShadow({ mode: 'open', delegatesFocus: false });

//       const onResize = () => { };

//       this.addEventListener('mousedown', (e) => {
//         onResize();
//       });
//     }

//     connectedCallback() {
//       this.shadowRoot.innerHTML = `
//         <style>
//           :host {
//             top: 0;
//             height: 100%;
//             position: absolute;
//             right: -2px;
//             width: 4px;
//             opacity: 0;
//             cursor: col-resize;
//             background: var(--complementary-bg-color);
//             transition: opacity 150ms ease-in-out 0s;
//             min-width: unset;
//             border-radius: unset;
//             margin: 0;
//             box-shadow: unset;
//           }
//         </style>
//       `;
//     }
//   },
// );

// template markup
// ===============================================================================================

const html = `
  <input type="checkbox" />
`;

// stylesheet
// ===============================================================================================

const css = `
  :host {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 12px;
    background-color: rgb(227, 232, 238);
    border-radius: 20px;
    transition: all 0.3s;
    /*box-shadow: 0 0 0 1px #313D4F;*/
  }

  :host::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius:50%;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 0 1px rgba(0,0,0,.07), 0 1px 3px 0 rgba(59,65,94,.1);
    top: -2px;
    left: 0;
    transition: all 0.3s;
    background-image: url('data:image/svg+xml;utf8, <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.828 5.243L2.343 3.757C2.16084 3.5684 2.06005 3.3158 2.06233 3.0536C2.0646 2.7914 2.16977 2.54059 2.35518 2.35518C2.54059 2.16977 2.7914 2.0646 3.0536 2.06233C3.3158 2.06005 3.5684 2.16084 3.757 2.343L5.243 3.828C4.68127 4.20007 4.20007 4.68127 3.828 5.243V5.243ZM7 3.1V1C7 0.734784 7.10536 0.48043 7.29289 0.292893C7.48043 0.105357 7.73478 0 8 0C8.26522 0 8.51957 0.105357 8.70711 0.292893C8.89464 0.48043 9 0.734784 9 1V3.1C8.34007 2.96594 7.65993 2.96594 7 3.1V3.1ZM10.757 3.828L12.243 2.343C12.3352 2.24749 12.4456 2.17131 12.5676 2.1189C12.6896 2.06649 12.8208 2.0389 12.9536 2.03775C13.0864 2.0366 13.2181 2.0619 13.341 2.11218C13.4639 2.16246 13.5755 2.23671 13.6694 2.33061C13.7633 2.4245 13.8375 2.53615 13.8878 2.65905C13.9381 2.78194 13.9634 2.91362 13.9623 3.0464C13.9611 3.17918 13.9335 3.3104 13.8811 3.4324C13.8287 3.55441 13.7525 3.66475 13.657 3.757L12.172 5.243C11.7999 4.68127 11.3187 4.20007 10.757 3.828V3.828ZM12.9 7H15C15.2652 7 15.5196 7.10536 15.7071 7.29289C15.8946 7.48043 16 7.73478 16 8C16 8.26522 15.8946 8.51957 15.7071 8.70711C15.5196 8.89464 15.2652 9 15 9H12.9C13.0341 8.34007 13.0341 7.65993 12.9 7V7ZM12.172 10.757L13.657 12.243C13.7525 12.3352 13.8287 12.4456 13.8811 12.5676C13.9335 12.6896 13.9611 12.8208 13.9623 12.9536C13.9634 13.0864 13.9381 13.2181 13.8878 13.341C13.8375 13.4639 13.7633 13.5755 13.6694 13.6694C13.5755 13.7633 13.4639 13.8375 13.341 13.8878C13.2181 13.9381 13.0864 13.9634 12.9536 13.9623C12.8208 13.9611 12.6896 13.9335 12.5676 13.8811C12.4456 13.8287 12.3352 13.7525 12.243 13.657L10.757 12.172C11.3187 11.7999 11.7999 11.3187 12.172 10.757V10.757ZM9 12.9V15C9 15.2652 8.89464 15.5196 8.70711 15.7071C8.51957 15.8946 8.26522 16 8 16C7.73478 16 7.48043 15.8946 7.29289 15.7071C7.10536 15.5196 7 15.2652 7 15V12.9C7.65993 13.0341 8.34007 13.0341 9 12.9V12.9ZM5.243 12.172L3.757 13.657C3.5684 13.8392 3.3158 13.94 3.0536 13.9377C2.7914 13.9354 2.54059 13.8302 2.35518 13.6448C2.16977 13.4594 2.0646 13.2086 2.06233 12.9464C2.06005 12.6842 2.16084 12.4316 2.343 12.243L3.828 10.757C4.20007 11.3187 4.68127 11.7999 5.243 12.172V12.172ZM3.1 9H1C0.734784 9 0.48043 8.89464 0.292893 8.70711C0.105357 8.51957 0 8.26522 0 8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7H3.1C2.96594 7.65993 2.96594 8.34007 3.1 9V9ZM8 11C7.20435 11 6.44129 10.6839 5.87868 10.1213C5.31607 9.55871 5 8.79565 5 8C5 7.20435 5.31607 6.44129 5.87868 5.87868C6.44129 5.31607 7.20435 5 8 5C8.79565 5 9.55871 5.31607 10.1213 5.87868C10.6839 6.44129 11 7.20435 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11Z" fill="rgb(239, 192, 120)"/></svg>');
    background-size: 12px 12px;
    background-position: center;
    background-repeat: no-repeat;
    transform: scaleX(1) scaleY(1) rotate(0deg);
  }

  input[type=checkbox] {
    display:none;
  }

  :host([checked]) {
    background-color: var(--green800);
    /*box-shadow: 0 0 0 1px #36AF47;*/
    border:none;
  }

  :host([checked])::after {
    left: 13px;
    background-color: var(--green900);
    box-shadow: 0 0 0 1px var(--green700);
    background-image: url('data:image/svg+xml;utf8, <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.914 0C7.09314 1.16174 6.65291 2.54952 6.654 3.972C6.654 7.847 9.867 10.989 13.832 10.989C14.775 10.989 15.675 10.811 16.5 10.489C15.423 13.688 12.34 16 8.704 16C4.174 16 0.5 12.41 0.5 7.982C0.5 3.814 3.754 0.389 7.914 0Z" fill="rgb(14, 98, 69)"/></svg>');
  }

  :host([disabled])::after {
    /*opacity: .5;*/
  }

  :host([checked][disabled]) {
    background-color: rgb(33, 45, 99);
    box-shadow: 0 0 0 1px #313D4F;
  }
  :host([checked][disabled])::after {
    /*opacity: .5;*/
  }
`;

// utils
// ===============================================================================================

const fireEvent = (host) =>
  host.dispatchEvent(
    new Event("change", {
      bubbles: true,
      composed: true,
    })
  );

customElements.define(
  "scheme-switch",
  class extends HTMLElement {
    // Identify the element as a form-associated custom element
    static get formAssociated() {
      return true;
    }

    static get observedAttributes() {
      return ["disabled", "checked"];
    }

    constructor() {
      super();
      // Get access to the internal form control APIs
      this._internals = this.attachInternals();

      this.attachShadow({ mode: "open", delegatesFocus: true });
      this.shadowRoot.innerHTML = `<style>${css}</style>${html}`;

      this.input_ = this.shadowRoot.querySelector("input");

      // Do something if <label> is clicked.
      this.addEventListener("click", () => {
        const checked = this.toggleAttribute("checked");
        this.checked = checked;
        fireEvent(this);
      });

      this.addEventListener("keypress", ({ metaKey, keyCode }) => {
        if (keyCode === 32) {
          const checked = this.toggleAttribute("checked");
          this.checked = checked;
          fireEvent(this);
        }
      });
    }

    // New lifecycle callbacks for form-associated
    //  custom elements.

    // New lifecycle callback. This is called when association with
    // <form> is changed.
    formAssociatedCallback(nullableForm) {
      console.log("Form associated.");
    }

    // New lifecycle callback. This is called when ‘disabled’ attribute of
    // this element or an ancestor <fieldset> is updated.
    formDisabledCallback(disabled) {
      // Do something.  e.g. adding/removing ‘disabled’ content attributes
      // to/from form controls in this shadow tree.
      if (disabled) {
        this.input_.disabled = disabled;
      }
    }

    // New lifecycle callback. This is called when the owner form is reset.
    formResetCallback() {
      console.log("Form reset.");
    }

    // New lifecycle callback. This is called when the browser wants to
    // restore user-visible state.
    formStateRestoreCallback(state, mode) {
      console.log("Form state restore.");
    }

    // The following properties and methods aren't strictly required,
    // but native form controls provide them. Providing them helps
    // ensure consistency with native controls.
    get form() {
      return this._internals.form;
    }

    get name() {
      return this.getAttribute("name");
    }

    get type() {
      return this.localName;
    }

    get validity() {
      return this.internals_.validity;
    }

    get validationMessage() {
      return this.internals_.validationMessage;
    }

    get willValidate() {
      return this.internals_.willValidate;
    }

    checkValidity() {
      return this.internals_.checkValidity();
    }

    reportValidity() {
      return this.internals_.reportValidity();
    }

    // Standard custom element callback
    // Here, we forward values like placeholder and disabled
    // to the internal input
    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "checked":
          this.input_.checked = !this.input_.checked;
          this.setAttribute("aria-checked", this.input_.checked);
          break;
        // case 'disabled':
        //     this.input_[name] = newValue;
        //   break;
      }
    }

    connectedCallback() {
      if (!this.hasAttribute("role")) this.setAttribute("role", "checkbox");
      if (!this.hasAttribute("tabindex")) this.setAttribute("tabindex", 0);
    }
  }
);

let dragging = 0;
const root = document.documentElement;
const target = document.getElementById("dragbar");

const clearJSEvents = () => {
  dragging = 0;
  root.removeEventListener("mousemove", resize);
  document.body.classList.remove("resizing");
  localStorage.setItem(
    "--base-nav-ideal-width",
    getComputedStyle(document.documentElement).getPropertyValue(
      "--base-nav-ideal-width"
    )
  );
};

const resize = (e) => {
  root.style.setProperty("--base-nav-ideal-width", `${e.pageX}px`);
};

target.onmousedown = (e) => {
  e.preventDefault();
  dragging = 1;
  root.addEventListener("mousemove", resize);
  document.body.classList.add("resizing");
};

document.onmouseup = () => {
  dragging ? clearJSEvents() : "";
};

// const onDrag = callback => {
//   const listen = action =>
//     Object.keys(events).forEach(event => {
//       console.log(action, event);
//       target[`${action}EventListener`](`mouse${event}`, events[event]);
//     });
//     const end = () => listen("remove");
//     const events = {
//       move: callback,
//       up: end
//     };
//     listen("add");
// };

// target.addEventListener('mousedown', e => {
//   const callback = e => {
//     // console.log(e);
//     //root.style.setProperty("--left-width", e.pageX + "px");
//     console.log('hello');
//   };
//   callback.call(e);
//   onDrag(callback);
// });


  //identify the toggle switch HTML element
  const toggleSwitch = document.querySelector('scheme-switch');

  //function that changes the theme, and sets a localStorage variable to track the theme between page loads
  function switchTheme(e) {
      if (e.target.checked) {
          localStorage.setItem('theme', 'dark');
          document.documentElement.setAttribute('data-theme', 'dark');
          toggleSwitch.checked = true;
      } else {
          localStorage.setItem('theme', 'light');
          document.documentElement.setAttribute('data-theme', 'light');
          toggleSwitch.checked = false;
      }
  }

  //listener for changing themes
  toggleSwitch.addEventListener('change', switchTheme, false);

  //pre-check the dark-theme checkbox if dark-theme is set
  if (document.documentElement.getAttribute("data-theme") == "dark"){
      toggleSwitch.checked = true;
  }

  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addListener((e) => {
    const darkModeOn = e.matches;
    console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`);
  });
  if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
    console.log('🎉 Dark mode is supported');
  }

  document.querySelector('header button:first-of-type').addEventListener('click', () => {
    document.querySelector('nav').toggleAttribute('data-open');
  });