import './css/App.css';

import Lib from '../lib';

class App {
  constructor(){
    const libInstance = new Lib();
    console.log("Demo loaded!", libInstance);
  }
}

export default App;
