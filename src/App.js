import logo from "./logo.svg";
import "./App.css";
import VendingMachine from "./VendingMachine";
import { BrowserRouter, Route } from "react-router-dom";
import Choices from "./Choices";
import Candy from "./Candy";
import Soda from "./Soda";
import Cookie from "./Cookie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/cookie">
          <Cookie />
        </Route>
        <Route exact path="/candy">
          <Candy />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
