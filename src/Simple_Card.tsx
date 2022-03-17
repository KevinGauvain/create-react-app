import React from "react";

const Card = (props: any) => {
  return (
    <div>
      <h1>FlashCard Website</h1>
      <p>{props.questionTest}</p>
    </div>
  );
};

export default Card;
