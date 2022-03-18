import React from "react";

const MultipleChoice = (props: any) => {
  const [face, setFace] = React.useState(true);

  const [isAnswer, setIsAnswer] = React.useState("");

  function controlInputText() {
    if (isAnswer === props.product.questionThree.answer) {
      return `Right ! The good answer is : ${props.product.questionThree.answer}`;
    } else if (isAnswer === "") {
      return `Wrong ! The good answer is => ${props.product.questionThree.answer}`;
    } else {
      return `Wrong ! The good answer is => ${props.product.questionThree.answer}`;
    }
  }

  return (
    <div>
      {face ? (
        <div>
          <form>
            <label htmlFor="firstNameString">
              {props.product.questionThree.question}
            </label>
            <div>
              <input
                type="radio"
                id="choice1"
                name="capital"
                value="Paris"
                onChange={(event) => setIsAnswer("Paris")}
              />
              <label htmlFor="choice1">Paris</label>
              <br />
              <input
                type="radio"
                id="choice2"
                name="capital"
                value="Berlin"
                onChange={(event) => setIsAnswer("Berlin")}
              />
              <label htmlFor="choice2">Berlin</label>
              <br />
              <input
                type="radio"
                id="choice3"
                name="capital"
                value="Londes"
                onChange={(event) => setIsAnswer("Londres")}
              />
              <label htmlFor="choice3">Londres</label>
            </div>
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

export default MultipleChoice;

// -
// -
// -
// -
// -
// -----------------------------------------Exercice fonctionnel avec checkbox et pas de multiple choix--------------------------------------------------

// const MultipleChoice = (props: any) => {
//   const [face, setFace] = React.useState(true);

//   const [isAnswer, setIsAnswer] = React.useState("");

//   function controlInputText() {
//     if (isAnswer === props.product.questionThree.answer) {
//       return (                                                                             <div> NON nécessaire dans le return !
//         <div>
//           Right ! The good answer is : {props.product.questionThree.answer}
//         </div>
//       );
//     } else if (isAnswer === "") {
//       return `Wrong ! The good answer is => ${props.product.questionThree.answer}`;
//     } else if (isAnswer.length > 1) {                                                      else if avec length NON nécessaire !
//       return `Wrong ! The good answer is => ${props.product.questionThree.answer}`;
//     } else {
//       return `Wrong ! The good answer is => ${props.product.questionThree.answer}`;
//     }
//   }

//   return (
//     <div>
//       {face ? (
//         <div>
//           <label htmlFor="firstNameString">
//             {props.product.questionThree.question}
//           </label>
//           <div>
//             <label>
//               <input type="checkbox" onChange={(event) => setIsAnswer("Paris")} />
//               Paris
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="checkbox" onChange={(event) => setIsAnswer("Berlin")} />
//               Berlin
//             </label>
//           </div>
//           <div>
//             <label>
//               <input
//                 type="checkbox"
//                 onChange={(event) => setIsAnswer("Londres")}
//               />
//               Londres
//             </label>
//           </div>
//           <button
//             type="submit"
//             className="btn btn-primary"
//             onClick={() => setFace(!face)}
//           >
//             Submit
//           </button>
//         </div>
//       ) : (
//         <button onClick={() => setFace(!face)}>{controlInputText()}</button>
//       )}
//     </div>
//   );
// };

// export default MultipleChoice;
