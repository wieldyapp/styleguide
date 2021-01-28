import App from '../../app.js';

class Aside extends HTMLElement {
  constructor() {
    super();

    this.insertAdjacentHTML("beforeend", '<div id="dragbar2"></div>');

    const root = document.documentElement;
    const target = document.getElementById("dragbar2");
    const transition = this.style.transition;

    if(App.preferences.showSidePane) {
      this.setAttribute('data-open','');
    }

    const resize = (e) => {
      this.style.transition = 'none';
      root.style.setProperty("--base-aside-ideal-width", `${window.innerWidth - e.pageX + 4}px`); /** Get bar width from css */
    };

    const persist = () => {
      this.style.transition = transition;
      App.preferences = {
        ...App.preferences,
        ...{ sidePaneWidth: getComputedStyle(root).getPropertyValue("--base-aside-ideal-width") }
      }
    };

    const onDrag = (callback) => {
      const listen = (action) =>
        Object.keys(events).forEach((event) =>
          root[`${action}EventListener`](`mouse${event}`, events[event])
        );
      const end = () => {
        listen("remove");
        persist();
      };
      const events = {
        move: callback,
        up: end
      };
      listen("add");
    };

    target.addEventListener("mousedown", (e) => {
      const callback = (() => {
        return resize;
      })();
      if (!callback) return;
      callback.call(root, e);
      onDrag(callback);
    });

  }

  static get observedAttributes() {
    return ['data-open'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    App.preferences = { ...App.preferences,  ...{ showSidePane: this.hasAttribute('data-open') } };
  }
}

customElements.define("resizable-aside", Aside, { extends: "aside" });

// userSettings	{"activeTeamId":"3b7aa9fd-4fc5-47b1-8b61-09abfd84c33c","openContainers":{"3b7aa9fd-4fc5-47b1-8b61-09abfd84c33c":{"value":true,"accessed":1611761481193},"e126c22a-65dc-424a-a607-e350ea5a2554":{"value":false,"accessed":1611761481211},"12d0aade-ef4a-4f36-83a1-0c54e952157d":{"value":false,"accessed":1611726894687},"608959e8-3395-469d-9a4e-a00fc4b7f8cf":{"value":false,"accessed":1611726894901},"sidebarFavorites":{"value":true,"accessed":1611761481154},"6ca0da00-f0e3-4e95-a1e6-7e3c30dc0954":{"value":false,"accessed":1611667191879},"8d0e2b0b-50c5-48a9-bcbb-3a55508458cb":{"value":false,"accessed":1611683770061},"520d2f88-0281-4759-988d-7db166430fdd":{"value":false,"accessed":1611761481215}},"sidebarWidth":371,"showCycleDetailPane":true,"cyclePanelWidth":320,"theme":"system"}