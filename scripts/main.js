import App from './app.js';
import './elements/iframe/index.js'
import './elements/nav/index.js'
import './elements/aside/index.js'
import './toolbar.js'

/* Toggle nav bar */
document.querySelector('header button:first-of-type').addEventListener('click', () => {
  document.querySelector('nav').toggleAttribute('data-open');
});

/* Toggle side bar */
document.querySelector("button[aria-controls=sidebar]").addEventListener('click', (e) => {
  e.currentTarget.setAttribute('aria-expanded', document.querySelector('aside').toggleAttribute('data-open'));
});

const imageList = document.querySelector('image-list');
/* Show thumbnail as square or in full aspect ratio */
document.querySelector("button[aria-controls=images]").addEventListener('click', (e) => {
  imageList.classList.toggle('aspect-ratio');
});

document.querySelector('input').addEventListener('input', (e) => {
  imageList.style.setProperty("--column-width", `${e.target.value}vw`);
});