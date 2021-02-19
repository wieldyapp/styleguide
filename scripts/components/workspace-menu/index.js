import { html, render } from "https://cdn.skypack.dev/lit-html";
import { dbManager, dbType } from "../../shared/idb/manager.js";

customElements.define(
  "workspace-menu",
  class extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open", delegatesFocus: false });

      this.render();
      this.bindEvents();
    }

    connectedCallback() {}

    disconnectedCallback() {}

    bindEvents() {
      const { shadowRoot } = this;
      const updateButton = shadowRoot.getElementById("updateDetails");

      const favDialog = shadowRoot.getElementById("favDialog");

      const selectEl = favDialog.querySelector("select");
      const inputEl = favDialog.querySelector("input");
      const confirmBtn = favDialog.querySelector("#confirmBtn");

      // "Update details" button opens the <dialog> modally
      updateButton.addEventListener("click", () => {
        if (typeof favDialog.showModal === "function") {
          favDialog.showModal();
        } else {
          alert("The <dialog> API is not supported by this browser");
        }
      });
      // "Favorite animal" input sets the value of the submit button
      selectEl.addEventListener("change", (e) => {
        confirmBtn.value = [inputEl.value, selectEl.value].join(",");
      });
      // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
      favDialog.addEventListener("close", (event) => {
        event.preventDefault();

        setTimeout(() => {
          console.log("timeout end");
        }, 5000);

        favDialog.classList.add("hide");

        favDialog.addEventListener(
          "animationend",
          function closeDialog() {
            favDialog.classList.remove("hide");
            favDialog.close();
            favDialog.removeAttribute("open");
            favDialog.focus();
            favDialog.removeEventListener("animationend", closeDialog, false);
          },
          false
        );

        // console.log(favDialog.returnValue.split(','));
        // const returnValue = favDialog.returnValue.split(",");
        // await dbManager.open(dbType.WORKSPACE, returnValue[0].toLowerCase());
      });

      favDialog.addEventListener("cancel", (event) => {
        event.preventDefault();

        favDialog.classList.add("hide");

        favDialog.addEventListener(
          "animationend",
          function closeDialog() {
            favDialog.classList.remove("hide");
            favDialog.close();
            favDialog.removeAttribute("open");
            favDialog.focus();
            favDialog.removeEventListener("animationend", closeDialog, false);
          },
          false
        );
      });
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
          domain: "wieldy.app",
          name: "Wieldy",
          id: "23",
          icon:
            "https://uploads.linear.app/6b398a37-b7c2-4de1-922a-15b40a22f010/e6b87a60-768b-4d02-be70-28f9bd256371/256x256/256.png",
        },
        {
          domain: "wieldy.app",
          name: "Encom",
          id: "23",
          icon:
            "https://uploads.linear.app/6b398a37-b7c2-4de1-922a-15b40a22f010/e6b87a60-768b-4d02-be70-28f9bd256371/256x256/256.png",
        },
        {
          domain: "wieldy.app",
          name: "Nimble Initiatives",
          id: "23",
          icon:
            "https://uploads.linear.app/6b398a37-b7c2-4de1-922a-15b40a22f010/e6b87a60-768b-4d02-be70-28f9bd256371/256x256/256.png",
        },
      ];
    }

    get template() {
      return html`
        <link
          rel="stylesheet"
          href="/scripts/components/workspace-menu/index.css"
        />
        <context-menu aria-label="Workspace menu" role="menu">
          <div slot="icon">
            <slot name="icon"></slot>
            <slot name="name"></slot>
          </div>
          <ul slot="content">
            ${this.workspaces.map(
              (workspace) => html`
                <li>
                  ${window.location.hostname.includes(workspace.domain)
                    ? html`<span
                        ><img
                          src="${workspace.icon}"
                          width="16"
                          height="16"
                          alt
                        />${workspace.name}</span
                      >`
                    : html`<a
                        href="https://${workspace.domain}.wieldy.local:5001"
                        data-id="${workspace.id}"
                        @click=${this.save}
                        ><img
                          src="${workspace.icon}"
                          width="16"
                          height="16"
                          alt
                        />${workspace.name}</a
                      >`}
                </li>
              `
            )}
            <li>
              <a href="/">Workspace settings</a>
            </li>
            <li>
              <button type="button" id="updateDetails">
                Create or join a workspace
              </button>
            </li>
            <li>
              <a href="/">Add account</a>
            </li>
            <li>
              <a href="/">Log out</a>
            </li>
          </ul>
        </context-menu>
        <dialog id="favDialog">
          <div style="width: clamp(320px, 460px, 100%)">
            <h1>Create a new workspace</h1>
            <p>Workspaces are shared environments where teams can work ...</p>
            <form method="dialog">
              <div>
                <div style="margin-bottom: 24px;">
                  <label style="color: rgb(215, 216, 219);margin-bottom:4px;"
                    >Name:<input type="text" autofocus
                  /></label>
                </div>
                <div style="margin-bottom: 24px;">
                  <label style="color: rgb(215, 216, 219);margin-bottom:4px;"
                    >Favorite animal:
                    <select>
                      <option></option>
                      <option>Brine shrimp</option>
                      <option>Red panda</option>
                      <option>Spider monkey</option>
                    </select>
                  </label>
                </div>
              </div>
              <menu style="text-align: center;margin-top:48px;">
                <button
                  value="cancel"
                  style="position:absolute; top: 30px; right: 30px;background: none;border: 0;"
                >
                  Back to Wieldy
                </button>
                <button id="confirmBtn" value="default">
                  Create workspace
                </button>
              </menu>
            </form>
          </div>
        </dialog>
      `;
    }

    save(e) {
      console.log("switch");
    }
  }
);
