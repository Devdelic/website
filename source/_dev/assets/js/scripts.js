// Local modules

class App {
  constructor() {
    if (!('querySelector' in document) || !('addEventListener' in window)
      || !document.documentElement.classList) {
      return;
    }

    this.navbar = [].slice.call(document.querySelectorAll('.js-navbar')).map((element) => {
      return new Navbar(element);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {

  WebFont.load({
    google: {
      families: ['Roboto:300,400,400i,700:latin-ext']
    }
  });

  new App();
});
