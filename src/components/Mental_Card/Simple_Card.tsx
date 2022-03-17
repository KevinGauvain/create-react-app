import React from "react";

const SimpleCard = (props: any) => {
  const [showingOneFaceOfCard, setShowingOneFaceOfCard] = React.useState(true);

  return (
    <div>
      <h1>FlashCard Website</h1>
      {/* <p>{showingOneFaceOfCard}</p> */}
      <button onClick={() => setShowingOneFaceOfCard(!showingOneFaceOfCard)}>
        {showingOneFaceOfCard ? (
          <p>{props.product.questionOne.question}</p>
        ) : (
          <p>{props.product.questionOne.answer}</p>
        )}
        {/* <p>{props.question}</p> */}
      </button>
    </div>
  );
};

export default SimpleCard;

// --------------------------------------Brouillon----------------------------------
// ------------Pour random----------------------------------------------------------

// function randomQuestion (value: any) {
//   const result = Math.floor(Math.random() * value.length)
//   return console.log(result);
// };

// const SimpleCard = (props: any) => {
//   const [showingOneFaceOfCard, setShowingOneFaceOfCard] = React.useState(true);

//   return (
//     <div>
//       <h1>FlashCard Website</h1>
//       {/* <p>{showingOneFaceOfCard}</p> */}
//       <button onClick={() => setShowingOneFaceOfCard(!showingOneFaceOfCard)}>
//         {showingOneFaceOfCard ? (
//           <p>{randomQuestion(props)}</p>
//         ) : (
//           <p>{props.product.questionOne.answer}</p>
//         )}
//         {/* <p>{props.question}</p> */}
//       </button>
//     </div>
//   );
// };

// export default SimpleCard;
