import React from "react";

const InputCard = (props: any) => {
  const [showingOneFaceOfCard, setShowingOneFaceOfCard] = React.useState(
    props.product.questionTwo.question
  );
  const [text, setText] = React.useState("");

  function handleInputText(data: any) {
    if (data.target.value === props.product.questionTwo.answer) {
      return <p>{props.product.questionTwo.answer}</p>;
    } else {
      const textWrong = "Wrong !";
      return <p>{textWrong}</p>;
    }
  }

  const firstFaceOfCard = () => {
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
            onSubmit={(event) => handleInputText(event)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  };

  // const secondFaceOfCard = () => {
  //   return (
  //     <div>
  //       {handleInputText}
  //     </div>
  //   );
  // };
  const final = firstFaceOfCard();
  return <div>{final}</div>;
};
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
