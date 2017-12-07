const componentDebug = false;

class Navbar {

  /**
   * Constructor
   */
  constructor() {
    if (componentDebug) {
      console.log("constructor...");
    }

    // Elements.
    this.navbar = document.querySelector('.js-navbar');
    this.button = this.navbar.querySelector('.js-navbar__button');
    this.navigation = this.navbar.querySelector('.js-navbar__navigation');

    // Options.
    this.options = {
      buttonActiveClass: 'is-active',
      navigationActiveClass: 'is-active',
    };

    // States.
    this.navigationIsActive = false;

    // Initialize.
    this.initialize();
  }

  /**
   * Initialize
   *
   * Initial method.
   */
  initialize() {
    if (componentDebug) {
      console.log("initialize...");
    }

    // Bind `this`.
    this.navigationStateSet = this.navigationStateSet.bind(this);
    this.navigationOpen = this.navigationOpen.bind(this);
    this.navigationClose = this.navigationClose.bind(this);
    this.navigationToggle = this.navigationToggle.bind(this);

    // Toggle menu by clicking on button.
    this.button.addEventListener('click', this.navigationToggle);

    // Close menu clicking anywhere on page.
    window.addEventListener('click', this.navigationClose);

    // Prevent closing menu by clicking inside menu.
    this.navbar.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }

  /**
   * Navigation Open
   *
   * Opens the navigation.
   */
  navigationOpen() {
    if (componentDebug) {
      console.log("navigationOpen...");
    }

    this.navigationStateSet(true);
    this.navigation.classList.add(this.options.navigationActiveClass);
    this.button.classList.add(this.options.buttonActiveClass);
  }

  /**
   * Navigation Close
   *
   * Closes the navigation.
   */
  navigationClose() {
    if (componentDebug) {
      console.log("navigationClose...");
    }

    this.navigationStateSet(false);
    if (this.navigation.classList.contains(this.options.navigationActiveClass)) {
      this.navigation.classList.remove(this.options.navigationActiveClass);
    }
    if (this.button.classList.contains(this.options.buttonActiveClass)) {
      this.button.classList.remove(this.options.buttonActiveClass);
    }
  }

  /**
   * Navigation Toggle
   *
   * Toggle the navigation.
   */
  navigationToggle() {
    if (componentDebug) {
      console.log("navigationToggle...");
    }

    if (this.navigationStateGet()) {
      this.navigationClose();
    }
    else {
      this.navigationOpen();
    }
  }

  /**
   * Navigation State Get
   *
   * Gets the navigation state.
   */
  navigationStateGet() {
    if (componentDebug) {
      console.log("navigationStateGet...");
    }

    return this.navigationIsActive;
  }

  /**
   * Navigation State Set
   *
   * Sets the navigation state.
   */
  navigationStateSet(value) {
    if (componentDebug) {
      console.log("navigationStateSet...");
    }

    this.navigationIsActive = value;
  }
}
