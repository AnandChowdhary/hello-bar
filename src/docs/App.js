import "./css/App.css";

import Lib from "../lib";

class App {
  constructor() {
    const libInstance = new Lib({
      text: "Welcome to this website! How are you doing today?",
      background: "#5352ed",
      move: "h1"
    });
    console.log("Demo loaded!", libInstance);
  }
}

export default App;
