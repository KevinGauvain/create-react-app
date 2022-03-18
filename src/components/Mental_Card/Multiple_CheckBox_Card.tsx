import React from "react";

const MultipleChoice = (props: any) => {
  const [face, setFace] = React.useState(true);

  const [isAnswer, setIsAnswer] = React.useState("");

  function controlInputText() {
    if (isAnswer === props.product.questionThree.answer) {
      return (
        <div>
          Right ! The good answer is : {props.product.questionThree.answer}
        </div>
      );
    } else if (isAnswer === "") {
      return `Wrong ! The good answer is => ${props.product.questionThree.answer}`;
    } else if (isAnswer.length > 1) {
      return `Wrong ! The good answer is => ${props.product.questionThree.answer}`;
    } else {
      return `Wrong ! The good answer is => ${props.product.questionThree.answer}`;
    }
  }

  return (
    <div>
      {face ? (
        <div>
          <label htmlFor="firstNameString">
            {props.product.questionThree.question}
          </label>
          <div>
            <label>
              <input
                type="checkbox"
                onChange={(event) => setIsAnswer("Paris")}
              />
              Paris
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                onChange={(event) => setIsAnswer("Berlin")}
              />
              Berlin
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                onChange={(event) => setIsAnswer("Londres")}
              />
              Londres
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => setFace(!face)}
          >
            Submit
          </button>
        </div>
      ) : (
        <button onClick={() => setFace(!face)}>{controlInputText()}</button>
      )}
    </div>
  );
};

export default MultipleChoice;
