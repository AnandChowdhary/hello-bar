import "./css/App.css";

import Lib from "../lib";

class App {
  constructor() {
    const libInstance = new Lib({
      text: "Welcome to this website! How are you doing today?"
    });
    console.log("Demo loaded!", libInstance);
  }
}

export default App;
