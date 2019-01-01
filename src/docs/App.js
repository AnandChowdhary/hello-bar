import "./css/App.css";
import Lib from "../lib";

const checkOutText =
  "Check out this repository on GitHub now! <a class='cta wiggle' href='https://github.com/AnandChowdhary/hello-bar'>⭐ Star now</a>";
const euText =
  "🍪 This website uses cookies to make your experience better. <a class='cta' href='#'>Cookie policy</a>";
const randomText = ["You are seeing message A!", "You are seeing message B!"];

class App {
  constructor() {
    this.libInstance = new Lib({
      text: checkOutText,
      background: "#5352ed",
      size: "large",
      delay: 500
    });
    this.addEvents();
    console.log("Demo loaded!", this.libInstance);
    const radioInputs = document.querySelectorAll("input[type='radio']");
    for (let i = 0; i < radioInputs.length; i++) {
      radioInputs[i].addEventListener("change", () => {
        this.libInstance.hideBar();
        switch (radioInputs[i].value) {
          case "cookie-law-1":
            setTimeout(() => {
              this.libInstance = new Lib({
                text: euText,
                position: "bottom",
                fixed: true
              });
              this.addEvents();
            }, 600);
            break;
          case "cookie-law-2":
            setTimeout(() => {
              this.libInstance = new Lib({
                text: euText,
                targeting: {
                  location: {
                    eu: true
                  }
                }
              });
              this.addEvents();
            }, 600);
            break;
          case "random":
            setTimeout(() => {
              this.libInstance = new Lib({
                text: randomText,
                background: "#e24331",
                size: "large"
              });
              this.addEvents();
            }, 600);
            break;
          default:
            setTimeout(() => {
              this.libInstance = new Lib({
                text: checkOutText,
                background: "#5352ed",
                size: "large"
              });
              this.addEvents();
            }, 600);
            break;
        }
      });
    }
  }
  addEvents() {
    [
      "before-created",
      "after-created",
      "not-created",
      "mouse-enter",
      "mouse-leave",
      "mouse-down",
      "mouse-up",
      "mouse-click",
      "show-bar",
      "hide-bar",
      "close-bar",
      "color-bar",
      "calculate-height",
      "created",
      "move-element",
      "start-ip-info",
      "fetch-ip-info",
      "error-ip-info"
    ].forEach(event => {
      this.libInstance.on(event, e => {
        console.log("Emitted " + event, e);
      });
    });
  }
}

export default App;
