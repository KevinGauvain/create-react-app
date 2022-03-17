import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import questionAndAnswer from "./data/questionAndAnswer";
// import Card from "../src/Simple_Card";
import FinalCardTest from "../src/index2";

function App() {
  return (
    <div className="App">
      <div id="app" className="container default-flex">
        <header className="App-header"></header>
        <FinalCardTest />
        <FinalCardTest product={questionAndAnswer} />
      </div>
    </div>
  );
}

export default App;
