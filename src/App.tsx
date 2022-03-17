import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import panelQuestion from "./data/questionAndAnswer";
// import Card from "../src/Simple_Card";
// import FinalCardTest from "./components/Mental_Card/index2";
import SimpleCard from "./components/Mental_Card/Simple_Card";
import InputCard from "./components/Mental_Card/Input_Form_Card";

function App() {
  return (
    <div id="app" className="container default-flex">
      {/* <header className="App-header"></header> */}
      <SimpleCard product={panelQuestion} />
      <InputCard product={panelQuestion} />
    </div>
  );
}

export default App;
