import React from "react";

const InputCard = (props: any) => {
  const [testing, setTesting] = React.useState(true);

  function test() {
    return (
      <div>
        <label htmlFor="firstNameString">Right</label>
        <p>Right ! Good answer !</p>
      </div>
    );
  }

  const test2 = () => {
    return (
      <div>
        <label htmlFor="firstNameString">Wrong</label>
        <p>Wrong ! Not the good answer !</p>
      </div>
    );
  };

  return (
    <div>
      <label htmlFor="firstNameString">
        {props.product.questionTwo.question}
      </label>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Type your answer"
        />
        <button
          className="btn btn-primary"
          onClick={() => setTesting(!testing)}
        >
          Submit
        </button>
        {testing ? <p>{test()}</p> : <p>{test2()}</p>}
      </form>
    </div>
  );
};

//   const [showingOneFaceOfCard, setShowingOneFaceOfCard] = React.useState(
//     props.product.questionTwo.question
//   );
//   const [text, setText] = React.useState("");
//   const [turn, setTurn] = React.useState(true);

//   function handleInputText(data: any) {
//     if (data.target.value === props.product.questionTwo.answer) {
//       return <p>vjvhjvj</p>;
//     } else {
//       return <p>nknllknlk</p>;
//     }
//   }

//   // const firstFaceOfCard = () => {
//   return (
//     <div>
//       <label htmlFor="firstNameString">
//         {props.product.questionTwo.question}
//       </label>
//       <form onClick={(event) => handleInputText(event)}>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Type your answer"
//         />
//         <button
//           className="btn btn-primary"
//           onClick={(event) => handleInputText(event)}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

//   const secondFaceOfCard = () => {
//     return <div>{firstFaceOfCard()}</div>;
//   };

//   const finalCardTurn = () => {
//     return (
//       <div>
//         {turn ? firstFaceOfCard() : secondFaceOfCard()}
//         {/* <p>{props.question}</p> */}
//       </div>
//     );
//   };

//   const final = finalCardTurn();
//   return <div>{final}</div>;
// };
// const [faceRightOrWrong, setfaceRightOrWrong] = React.useState(true);

// const secondFaceOfCard = () => {
//   return (
//     //   if (data.target.value === props.product.questionTwo.answer) {
//     //     return <p>{setText(`Great ! Answer is : ${props.product.questionTwo.answer}`)}</p>;
//     //   } else {
//     //     return setText(`Wrong ! Answer is : ${props.product.questionTwo.answer}`);
//     //   }
//     // }
//     <div>
//       <label htmlFor="firstNameString">{showingOneFaceOfCard}</label>
//     </div>
//   );
// };

// const [faceTurn, setFaceTurn] = React.useState(true);

// return (
//   <div>
//     <button onClick={() => setFaceTurn(!faceTurn)}>
//       {faceTurn ? <p>{firstFaceOfCard()}</p> : <p>{secondFaceOfCard()}</p>}
//     </button>
//   </div>
// );
// };

export default InputCard;
