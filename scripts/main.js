import App from './app.js';

import './shared/index.js';
import './components/index.js';
import './elements/index.js';
import './views/index.js';
import './layouts/index.js';

App.init();

const imageList = document.querySelector('image-list');
/* Show thumbnail as square or in full aspect ratio */
document.querySelector("button[aria-controls=images]")?.addEventListener('click', (e) => {
  imageList.classList.toggle('aspect-ratio');
});

document.querySelector('input')?.addEventListener('input', (e) => {
  imageList.style.setProperty("--column-width", `${e.target.value}vw`);
});