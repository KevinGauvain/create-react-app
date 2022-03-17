import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import panelQuestion from "./data/questionAndAnswer";
// import Card from "../src/Simple_Card";
import FinalCardTest from "./components/Mental_Card/index2";

function App() {
  return (
    <div id="app" className="container default-flex">
      {/* <header className="App-header"></header> */}
      <FinalCardTest product={panelQuestion} />
    </div>
  );
}

export default App;
