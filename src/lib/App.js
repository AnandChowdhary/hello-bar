import "./css/App.css";

class App {
  constructor(settings) {
    this.settings = settings || {};
    this.element = document.createElement("div");
    this.element.innerHTML = `
      <p>${this.settings.text}</p>
    `;
    this.element.classList.add("hello-bar");
    if (this.settings.fixed) {
      this.element.classList.add("hello-bar--is-fixed");
    }
    this.insertBar();
    this.moveElements(this.settings.move);
  }

  insertBar() {
    const firstChild = document.querySelector("body > *");
    if (firstChild) {
      document.body.insertBefore(this.element, firstChild);
    } else {
      document.body.appendChild(this.element);
    }
  }

  moveElements(elements) {}
}

export default App;
