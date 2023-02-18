import React from "react";
import data from "../data.json";
import Timer from "../Timer";


function Literature({ checkAnswers, answerIndex, questionIndex }) {


  return (
    <div className="quiz">
      <Timer />
      <h3 className="quiz__questions">{data.Literature[questionIndex].question}</h3>
      <ul className="quiz__answers">
        {data.Literature[answerIndex].answers.map((answer, index) =>
          <li className="quiz__answer" onClick={() => checkAnswers(data.Literature[answerIndex].correctIndex, index)}>{answer}</li>
        )}
      </ul>
    </div>
  )
}

export default Literature;