class App {
  /**
   * @param {object} args
   */
  init(args) {
    console.log('init');
  }

  get preferences() {
    try {
      return JSON.parse(localStorage.getItem('preferences'));
    } catch(error) {
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