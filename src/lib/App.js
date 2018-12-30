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
    this.calculateHeight();
    this.moveElements(document.body);
    this.moveElements(this.settings.move);
  }

  calculateHeight() {
    if (
      typeof this.element.getBoundingClientRect === "function" &&
      this.element.getBoundingClientRect().height
    ) {
      this.height = this.element.getBoundingClientRect().height;
    } else {
      this.height = this.element.offsetHeight;
    }
    this.height = parseInt(this.height);
  }

  insertBar() {
    const firstChild = document.querySelector("body > *");
    if (firstChild) {
      document.body.insertBefore(this.element, firstChild);
    } else {
      document.body.appendChild(this.element);
    }
  }

  moveElements(elements) {
    if (!elements) return;
    // e.g., "h1.hero-title"
    if (typeof elements === "string") {
      const allElements = document.querySelectorAll(elements);
      for (let i = 0; i < allElements.length; i++) {
        this.moveElements(allElements[i]);
      }
      // e.g., ["h1.hero-title", document.querySelector("a#moveMe")]
    } else if (elements.constructor === Array && elements.length) {
      for (let i = 0; i < elements.length; i++) {
        this.moveElements(elements[i]);
      }
      // e.g., document.querySelector("a#moveMe")
    } else if (typeof elements === "object") {
      if (
        typeof elements.classList === "object" &&
        typeof elements.classList.add === "function"
      ) {
        const style =
          elements.currentStyle || window.getComputedStyle(elements);
        if (typeof style === "object" && style.marginTop) {
          elements.style.marginTop = `${parseInt(style.marginTop) +
            this.height}px`;
        } else {
          elements.style.marginTop = `${this.height}px`;
        }
        elements.classList.add("hello-bar--has-moved");
      }
    }
  }
}

export default App;
