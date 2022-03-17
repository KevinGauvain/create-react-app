import React from "react";
import Card from "../src/Simple_Card";

const FinalCardTest = (props) => {
  return (
    <div>
      <Card questionTest={props.product[0].question}></Card>
    </div>
  );
};

export default FinalCardTest;
