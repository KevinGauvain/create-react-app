import React from "react";

const InputCard = (props: any) => {
  const [face, setFace] = React.useState(true);

  const [isAnswer, setIsAnswer] = React.useState("");

  function controlInputText() {
    if (isAnswer === props.product.questionTwo.answer) {
      return (
        <div>
          Right ! The good answer is : {props.product.questionTwo.answer}
        </div>
      );
    } else if (isAnswer === "") {
      return `Wrong ! The good answer is => ${props.product.questionTwo.answer}`;
    } else {
      return `Wrong ! The good answer is => ${props.product.questionTwo.answer}`;
    }
  }

  return (
    <div>
      {face ? (
        <div>
          <label htmlFor="firstNameString">
            {props.product.questionTwo.question}
          </label>
          <form onSubmit={controlInputText}>
            <input
              type="text"
              className="form-control"
              placeholder="Capital letter expected"
              onChange={(event) => setIsAnswer(event.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => setFace(!face)}
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <button onClick={() => setFace(!face)}>{controlInputText()}</button>
      )}
    </div>
  );
};

// -
// -
// -
// -
// -
// -
// --------------------------ATTENTION !!! => EXPORT FONCTION TOUT EN BAS !!! A LA FIN DU BROUILLON------------------------------------

// --------------------------------------------------Brouillon----------------------------------------------------------------------

//   return (
//     <div>
//       <label htmlFor="firstNameString">
//         {props.product.questionTwo.question}
//       </label>
//       <form>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Type your answer"
//         />
//         <button
//           className="btn btn-primary"
//           onClick={() => setTesting(!testing)}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// const test2 = () => {
//   return (
//     <div>
//       <label htmlFor="firstNameString"></label>
//       <button onClick={() => setTesting(!testing)}>
//         {" "}
//         Not the good answer !
//       </button>
//     </div>
//   );
// };

// const test3 = () => {
//   return (
//     <div>
//       <label htmlFor="firstNameString"></label>
//       <button onClick={() => setTesting(!testing)}>
//         {" "}
//         Right ! Good answer !
//       </button>
//     </div>
//   );
// };

// function handleInputText(data: any) {
//   if (data.target.value === "oui") {
//     return test2();
//   } else {
//     return test3();
//   }
// }

// const result = handleInputText();

//   return (
//     <div>
//       {/* <label htmlFor="firstNameString">
//         {props.product.questionTwo.question}
//       </label>
//       <form>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Type your answer"
//         />
//         <button
//           className="btn btn-primary"
//           onClick={() => setTesting(!testing)}
//         >
//           Submit
//         </button> */}
//       {/* <p>{test()}</p> */}
//       {test()}
//       {/* </form> */}
//     </div>
//   );
// };

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
