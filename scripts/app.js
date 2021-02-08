import { createStore, useState, useConfig } from 'https://unpkg.com/@wieldyapp/wieldy'
class App {
  /**
   * @param {object} args
   */
  async init(args) {

    const store = createStore({ actions: {}, mutations: {}, initialState: {} });

    this.bindEvents();
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