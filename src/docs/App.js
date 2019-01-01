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
            }, 600);
            break;
          case "random":
            setTimeout(() => {
              this.libInstance = new Lib({
                text: randomText,
                background: "#e24331",
                size: "large"
              });
            }, 600);
            break;
          default:
            setTimeout(() => {
              this.libInstance = new Lib({
                text: checkOutText,
                background: "#5352ed",
                size: "large"
              });
            }, 600);
            break;
        }
      });
    }
  }
}

export default App;
