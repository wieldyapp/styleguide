customElements.define('team-menu', class extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open', delegatesFocus: false });
    this.shadowRoot.innerHTML = `
      <style>

        .miniPlus {
          font-size: 12px;
          color: rgb(138, 143, 152);
          font-weight: 500;
        }

        .small {
          font-size: 13px;
          font-weight: 400;
          color: rgb(215, 216, 219);
        }

        .smallPlus {
          font-size: 13px;
          font-weight: 500;
          color: rgb(247, 248, 248);
        }

        summary { list-style-type: none; border-radius:4px; } /* Firefox */
        summary::-webkit-details-marker, /* Chrome */
        summary::marker {
          display: none;
        }

        summary > span {
          display: flex;
          border-radius: 4px;
          padding: 0 var(--spacing-000);
          line-height: 24px;
          place-items: center;
        }

        summary:hover {
          background-color: rgb(45, 47, 54);
        }

        summary > span::after {
          width: 6px;
          height: 6px;

          margin-left: 8px;

          background-color: #8A8F98;

          content: "";
          clip-path: polygon(0 0, 0 100%, 100% 50%);

          opacity: 0;
        }

        summary:hover > span::after {
          opacity: 1;
        }

        /* By using [open] we can define different styles when the disclosure widget is open */
        details[open] summary > span::after {
          transform: rotate(90deg);
        }

        details details summary::-webkit-details-marker {
          display: inline-block;
        }

        ul {
          padding:0;
          margin: 0;
          list-style:none;
        }

        li {
          padding: 1px 0 1px var(--spacing-2);
          display:flex;
          line-height: 28px;
          place-items: center;
          border-radius: 4px;
        }

        li:hover {
          background-color: rgb(45, 47, 54);
        }

        li > span {
          padding-left: 0;
        }

        summary::-webkit-details-marker {
          margin-right: 0; /* 8px; */

          color: #61646C;
        }

        summary::marker {
          margin-right: var(--spacing-000); /* 10px; */

          color: #61646C;
        }

        .icon {
          margin-right: var(--spacing-0000); /* 6px; */
          width: 14px;
          height: 14px;
        }

      </style>
      <details open>
        <summary><span class="miniPlus">Your teams</span></summary>
        <details open>
          <summary class="smallPlus" style="line-height:28px;margin:0;padding-left:var(--spacing-000);"><span style="display:inline-block;padding: 0 var(--spacing-0);">Localhost</span></summary>
          <slot name="list"></slot>
          <ul>
            <li class="small">
              <svg class="icon" width="16" height="16" viewBox="0 0 16 16" fill="#8A8F98">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"></path>
              </svg> <span>Issues</span>
            </li>
            <li class="small"><span style="padding-left: var(--spacing-1)">Backlog</span></li>
            <li class="small"><span style="padding-left: var(--spacing-1)">All</span></li>
            <li class="small"><span style="padding-left: var(--spacing-1)">Board</span></li>
            <li class="small">
              <svg class="icon" width="16" height="16" viewBox="-3 -3 16 16" stroke="none" fill="#8A8F98">
                <path d="M3.45455 0H0.545455C0.244208 0 0 0.244208 0 0.545455V3.45455C0 3.75579 0.244208 4 0.545455 4H3.45455C3.75579 4 4 3.75579 4 3.45455V0.545455C4 0.244208 3.75579 0 3.45455 0Z"></path><path d="M9.95479 0H7.0457C6.74445 0 6.50024 0.244208 6.50024 0.545455V3.45455C6.50024 3.75579 6.74445 4 7.0457 4H9.95479C10.256 4 10.5002 3.75579 10.5002 3.45455V0.545455C10.5002 0.244208 10.256 0 9.95479 0Z"></path><path d="M3.45455 6.50024H0.545455C0.244208 6.50024 0 6.74445 0 7.0457V9.95479C0 10.256 0.244208 10.5002 0.545455 10.5002H3.45455C3.75579 10.5002 4 10.256 4 9.95479V7.0457C4 6.74445 3.75579 6.50024 3.45455 6.50024Z"></path><path d="M9.95479 6.50024H7.0457C6.74445 6.50024 6.50024 6.74445 6.50024 7.0457V9.95479C6.50024 10.256 6.74445 10.5002 7.0457 10.5002H9.95479C10.256 10.5002 10.5002 10.256 10.5002 9.95479V7.0457C10.5002 6.74445 10.256 6.50024 9.95479 6.50024Z"></path>
              </svg> <span>Projects</span>
            </li>
            <li class="small">
              <svg class="icon" width="16" height="16" viewBox="0 0 16 16" fill="#8A8F98">
                <path d="M13.7191 2H2.17335C1.50213 2 0.958008 2.59695 0.958008 3.33333V5.33333C0.958008 5.70152 1.23007 6 1.56568 6H14.3268C14.6624 6 14.9344 5.70152 14.9344 5.33333V3.33333C14.9344 2.59695 14.3903 2 13.7191 2C13.7191 2 13.7191 2 13.7191 2Z"></path><path d="M13.2689 7H2.62355C2.25598 7 1.95801 7.27252 1.95801 7.6087V12.7826C1.95801 13.455 2.55396 14 3.2891 14H12.6033C13.3385 14 13.9344 13.455 13.9344 12.7826V7.6087C13.9344 7.27252 13.6365 7 13.2689 7ZM10.1092 9.13043C10.1085 9.55037 9.73648 9.89063 9.27732 9.89131H6.61513C6.15567 9.89131 5.7832 9.55065 5.7832 9.13044C5.7832 8.71022 6.15567 8.36957 6.61513 8.36957H9.27731C9.73647 8.37024 10.1085 8.7105 10.1092 9.13043Z"></path>
              </svg> <span>Archive</span>
            </li>
            <li class="small">
              <span style="padding-left: var(--spacing-1);text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">Organizational work and culture</span>
            </li>
          </ul>
        </details>
      </details>
    `;
  }
});
