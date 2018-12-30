import "./css/App.css";

import Lib from "../lib";

class App {
  constructor() {
    const libInstance = new Lib({
      text:
        "Welcome to this website! How are you doing today? This is great, <a href='#'>isn't it</a>? <button>Call to Action</button>",
      background: "#5352ed",
      delay: 500
    });
    console.log("Demo loaded!", libInstance);
  }
}

export default App;
