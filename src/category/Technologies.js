import React from "react";
import data from "../data.json"

function Technologies({ checkAnswers, answerIndex, questionIndex }) {

  return (
    <div>
      <span className="quiz__timer">90</span>
      <h3 className="quiz__questions">{data.Technologies[questionIndex].question}</h3>
      <ul className="quiz__answers">
        {data.Technologies[answerIndex].answers.map((answer, index) =>
          <li className="quiz__answer" onClick={() => checkAnswers(data.Technologies[answerIndex].correctIndex, index)}>{answer}</li>
        )}
      </ul>
    </div>
  )
}

export default Technologies;