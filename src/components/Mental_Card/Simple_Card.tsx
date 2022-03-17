import React from "react";

const Card = (props: any) => {
  const [showingOneFaceOfCard, setShowingOneFaceOfCard] = React.useState(
    props.question
  );
  return (
    <div>
      <h1>FlashCard Website</h1>
      {/* <p>{showingOneFaceOfCard}</p> */}
      <button onClick={() => setShowingOneFaceOfCard(showingOneFaceOfCard)}>
        {showingOneFaceOfCard}
      </button>
      {/* <p>{props.question}</p> */}
    </div>
  );
};

export default Card;
