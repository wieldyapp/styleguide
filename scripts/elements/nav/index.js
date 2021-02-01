import App from '../../app.js';

class Nav extends HTMLElement {
  constructor() {
    super();

    this.insertAdjacentHTML("beforeend", '<div id="dragbar"></div>');

    const root = document.documentElement;
    const target = document.getElementById("dragbar");

    const resize = (e) => {
      root.style.setProperty("--base-nav-ideal-width", `${e.pageX+2}px`); /** Get bar width from css */
    };

    const onDragEnd = () => {
      // document.querySelector('main').style.pointerEvents = 'auto';
      App.preferences = {
        ...App.preferences,
        ...{ navPaneWidth: getComputedStyle(root).getPropertyValue("--base-nav-ideal-width") }
      }
    };

    const onDragStart = () => {
      // document.querySelector('main').style.pointerEvents = 'none';
    }

    const onDrag = (callback) => {
      const listen = (action) =>
        Object.keys(events).forEach((event) =>
          root[`${action}EventListener`](`mouse${event}`, events[event])
        );
      const end = () => {
        listen("remove");
        onDragEnd();
      };
      const events = {
        move: callback,
        up: end
      };
      listen("add");
    };

    target.addEventListener("mousedown", (e) => {
      onDragStart();
      const callback = (() => {
        return resize;
      })();
      if (!callback) return;
      callback.call(root, e);
      onDrag(callback);
    });
  }

}

customElements.define("resizable-nav", Nav, { extends: "nav" });
