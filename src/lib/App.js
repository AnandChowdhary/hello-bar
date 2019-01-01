import "./css/App.css";
import fontColorContrast from "font-color-contrast";
import cachedFetch from "./cachedFetch";
import euCountries from "./euCountries";
import getParameterByName from "./getParameterByName";

class App {
  constructor(settings) {
    settings = settings || {};
    this.settings = settings;
    ["i18n", "targeting"].forEach(category => {
      this.settings[category] = this.settings[category] || {};
    });
    this.settings.targeting.location = this.settings.targeting.location || {};
    this.settings.targeting.params = this.settings.targeting.params || {};
    this.id =
      "hoverBar-" +
      Math.random()
        .toString(36)
        .substr(2);
    this.bar = document.createElement("div");
    this.bar.setAttribute("id", this.id);
    this.bar.innerHTML = `<div class="hello-bar-container"><p class="hello-bar-text">${
      this.settings.text
    }</p></div><div class="hello-bar-text--after"></div>`;
    if (!this.settings.hideClose) {
      this.bar.innerHTML += `<button class="hello-bar-button" aria-controls="${
        this.id
      }" aria-expanded="true" aria-label="${this.settings.i18n.hideText ||
        "Hide announcement"}">
        <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
            <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
        </svg>
      </button>`;
    }
    this.bar.classList.add("hello-bar");
    if (this.settings.fixed) {
      this.bar.classList.add("hello-bar--is-fixed");
    }
    this.confirmShow()
      .then(() => {
        this.insertBar();
        this.functionBar();
        this.calculateHeight();
        this.colorizeBar();
        if (!this.settings.disableBodyMove) this.moveElements(document.body);
        this.moveElements(this.settings.move);
        this.showBar();
      })
      .catch(() => {});
  }

  confirmShow() {
    return new Promise((resolve, reject) => {
      const finishConfirmation = () => {
        if (this.settings.targeting.once) {
          if (sessionStorage.getItem("hello-bar--session-showed"))
            return reject();
        }
        if (this.settings.targeting.onceUser) {
          if (localStorage.getItem("hello-bar--user-showed")) return reject();
        }
        if (this.settings.targeting.params) {
          Object.keys(this.settings.targeting.params).forEach(param => {
            const paramValue = getParameterByName(param);
            if (
              paramValue &&
              paramValue !== this.settings.targeting.params[param]
            )
              return reject();
          });
        }
        resolve();
      };
      if (this.settings.hide) return reject();
      if (this.settings.targeting.location) {
        this.getIpInfo().then(geolocation => {
          if (this.settings.targeting.location.eu) {
            if (!euCountries.includes(geolocation.country)) return reject();
          }
          ["country", "city", "ip", "postal", "region"].forEach(
            targetOptions => {
              if (
                this.settings.targeting.location[targetOptions] &&
                this.settings.targeting.location[targetOptions].constructor ===
                  Array
              ) {
                if (
                  !this.settings.targeting.location[targetOptions].includes(
                    geolocation[targetOptions]
                  )
                )
                  return reject();
              }
            }
          );
          finishConfirmation();
        });
      } else {
        finishConfirmation();
      }
    });
  }

  showBar() {
    if (!document.querySelector(`#${this.id}`)) return;
    this.bar.style.transition = (this.settings.duration || 500) + "ms";
    setTimeout(() => {
      this.bar.classList.add("hello-bar--is-visible");
    }, this.settings.delay || 1);
  }

  hideBar() {
    if (!document.querySelector(`#${this.id}`)) return;
    this.bar.classList.remove("hello-bar--is-visible");
    sessionStorage.setItem("hello-bar--session-showed", true);
    localStorage.setItem("hello-bar--user-showed", true);
    const movedElements = document.querySelectorAll(".hello-bar--has-moved");
    for (let i = 0; i < movedElements.length; i++) {
      const currentMargin = parseInt(movedElements[i].style.marginTop);
      movedElements[i].style.marginTop = `${currentMargin - this.height}px`;
      movedElements[i].classList.remove("hello-bar--has-moved");
    }
    setTimeout(() => {
      this.bar.parentNode.removeChild(this.bar);
    }, (this.settings.duration || 500) + 1);
  }

  functionBar() {
    if (document.querySelector(".hello-bar button.hello-bar-button")) {
      document
        .querySelector(".hello-bar button.hello-bar-button")
        .addEventListener("click", () => this.hideBar());
    }
  }

  colorizeBar() {
    if (!document.querySelector(`#${this.id}`)) return;
    const backgroundColor = this.settings.background || "#eeeeee";
    this.bar.style.backgroundColor = backgroundColor;
    if (document.querySelector(".hello-bar .hello-bar-text--after"))
      document.querySelector(
        ".hello-bar .hello-bar-text--after"
      ).style.background = `linear-gradient(to right, rgba(0, 0, 0, 0), ${backgroundColor})`;
    this.bar.style.color =
      this.settings.textColor || fontColorContrast(backgroundColor);
    this.bar.style.textAlign = this.settings.align || "center";
    if (document.querySelector(".hello-bar p.hello-bar-text .cta")) {
      document.querySelector(
        ".hello-bar p.hello-bar-text .cta"
      ).style.height = `${this.height}px`;
      document.querySelector(
        ".hello-bar p.hello-bar-text .cta"
      ).style.lineHeight = `${this.height}px`;
      document.querySelector(".hello-bar p.hello-bar-text .cta").style.color =
        this.settings.background || "#eeeeee";
      document.querySelector(
        ".hello-bar p.hello-bar-text .cta"
      ).style.background =
        this.settings.textColor || fontColorContrast(backgroundColor);
    }
  }

  calculateHeight() {
    if (!document.querySelector(`#${this.id}`)) return;
    if (this.settings.size)
      this.bar.classList.add(`hello-bar--size-${this.settings.size}`);
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
        typeof elements.classList.add === "function" &&
        !elements.classList.contains("hello-bar--has-moved")
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

  getIpInfo() {
    return new Promise((resolve, reject) => {
      cachedFetch(this.settings.ipEndpoint || "https://ipinfo.io/json")
        .then(json => resolve(json))
        .catch(error => reject(error));
    });
  }
}

export default App;
