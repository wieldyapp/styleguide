import { dbManager } from './shared/idb/manager.js'
class App {
  /**
   * @param {object} args
   */
  async init(args) {

    dbManager.init();

    this.bindEvents();

    // this.preferences = {
    //   ...this.preferences,
    //   ...{ beta: true }
    // }
  }

  /**
   * Bind events used throughout the app
   */
  bindEvents() {
    window.addEventListener('DOMContentLoaded', (event) => {
      document.body.classList.add('loaded');
    });
  }

  get preferences() {
    try {
      return JSON.parse(localStorage.getItem('preferences'));
    } catch (error) {
      return {}
    }
  }

  /**
   * @param {object} obj - The Preference object
   */
  set preferences(obj) {
    localStorage.setItem('preferences', JSON.stringify(obj));
    window.dispatchEvent(new Event('storage')); // Default localstorage event only fires when modified in another document
  }

}

export default new App();