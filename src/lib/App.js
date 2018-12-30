import "./css/App.css";
import fontColorContrast from "font-color-contrast";

class App {
  constructor(settings) {
    this.settings = settings || {};
    this.bar = document.createElement("div");
    this.bar.innerHTML = `
      <p>${this.settings.text}</p>
    `;
    this.bar.classList.add("hello-bar");
    if (this.settings.fixed) {
      this.bar.classList.add("hello-bar--is-fixed");
    }
    this.insertBar();
    this.colorizeBar();
    this.calculateHeight();
    this.moveElements(document.body);
    this.moveElements(this.settings.move);
    this.showBar();
  }

  showBar() {
    this.bar.style.transition = this.settings.duration || "0.5s";
    setTimeout(() => {
      this.bar.classList.add("hello-bar--is-visible");
    }, this.settings.delay || 1);
  }

  colorizeBar() {
    const backgroundColor = this.settings.background || "#eeeeee";
    this.bar.style.backgroundColor = backgroundColor;
    if (this.settings.textColor) {
      this.bar.style.color = this.settings.textColor;
    } else {
      this.bar.style.color = fontColorContrast(backgroundColor);
    }
  }

  calculateHeight() {
    if (
      typeof this.bar.getBoundingClientRect === "function" &&
      this.bar.getBoundingClientRect().height
    ) {
      this.height = this.bar.getBoundingClientRect().height;
    } else {
      this.height = this.bar.offsetHeight;
    }
    this.height = parseInt(this.height);
  }

  insertBar() {
    const firstChild = document.querySelector("body > *");
    if (firstChild) {
      document.body.insertBefore(this.bar, firstChild);
    } else {
      document.body.appendChild(this.bar);
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
