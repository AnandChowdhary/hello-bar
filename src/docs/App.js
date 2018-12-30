import "./css/App.css";

import Lib from "../lib";

class App {
  constructor() {
    const libInstance = new Lib({
      text:
        "Welcome to this website! How are you doing today? This is great, <a href='https://github.com/AnandChowdhary/hello-bar'>isn't it</a>? <a class='cta' href='https://github.com/AnandChowdhary/hello-bar'>⭐ Star now</a>",
      background: "#5352ed",
      size: "large",
      delay: 500
    });
    console.log("Demo loaded!", libInstance);
  }
}

export default App;
