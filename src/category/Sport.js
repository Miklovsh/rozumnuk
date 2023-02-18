import React from "react";
import data from "../data.json";
import Timer from "../Timer";

function Sport({ checkAnswers, answerIndex, questionIndex }) {

  return (
    <div className="quiz">
      <Timer />
      <h3 className="quiz__questions">{data.Sport[questionIndex].question}</h3>
      <ul className="quiz__answers">
        {data.Sport[answerIndex].answers.map((answer, index) =>
          <li className="quiz__answer" onClick={() => checkAnswers(data.Sport[answerIndex].correctIndex, index)}>{answer}</li>
        )}
      </ul>
    </div>
  )
}

export default Sport;