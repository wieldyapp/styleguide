class MyIframe extends HTMLIFrameElement {
  constructor() {
    super();

    this.insertAdjacentHTML('beforebegin', '<div class="resizer top-left"></div>');
    this.insertAdjacentHTML('beforebegin', '<div class="resizer top-right"></div>');
    this.insertAdjacentHTML('beforebegin', '<div class="resizer bottom-right"></div>');

    const element = this;
    const zoom = getComputedStyle(document.documentElement).getPropertyValue('--quicklook-zoom');
    const minimum_size = getComputedStyle(document.documentElement).getPropertyValue('--quicklook-minimum-size');

    let original_width = 0;
    let original_height = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;

    [...this.parentElement.querySelectorAll(".resizer")].forEach(
      currentResizer => {
        currentResizer.addEventListener("mousedown", e => {
          e.preventDefault();

          if (e.which !== 1) return; // abort if not left mouse click

          original_width = parseFloat(
            getComputedStyle(element, null)
              .getPropertyValue("width")
              .replace("px", "")
          );
          original_height = parseFloat(
            getComputedStyle(element, null)
              .getPropertyValue("height")
              .replace("px", "")
          );

          original_mouse_x = e.pageX;
          original_mouse_y = e.pageY;

          window.addEventListener("mousemove", resize);
          window.addEventListener("mouseup", resizeEnd);

        });

        const resize = e => {
          this.style.pointerEvents = 'none';
          if (currentResizer.classList.contains("bottom-right")) {
            const height = original_height + (e.pageY - original_mouse_y) * (1 / zoom);
            if (height > minimum_size) {
              element.style.height = height + "px";
            }
          }
          else if (currentResizer.classList.contains("top-right")) {
            const width = original_width + ((e.pageX - original_mouse_x) * (1 / zoom * 2));
            if (width >= minimum_size) {
              element.style.width = width + "px";
            }
          }
          else {
            const width = original_width - ((e.pageX - original_mouse_x) * (1 / zoom * 2));
            if (width >= minimum_size) {
              element.style.width = width + "px";
            }
          }
        };

        const resizeEnd = () => {
          this.style.pointerEvents = 'auto';
          window.removeEventListener("mousemove", resize);
        };

      }
    );
  }
}

customElements.define('my-iframe', MyIframe, { extends: 'iframe' });