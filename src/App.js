import logo from "./logo.svg";
import "./App.css";
import Classroom from "./classrooom/classroom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Items from "./items/items";
import Data from "./data/data";

function App() {
  return (
    <div className="App">
      <Data />
    </div>
  );
}

export default App;
