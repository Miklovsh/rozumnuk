import React from "react";
import data from "../data.json";
import Timer from "../Timer";

function Films({ checkAnswers, answerIndex, questionIndex }) {

  return (
    <div>
      <Timer />
      <h3 className="quiz__questions">{data.Films[questionIndex].question}</h3>
      <ul className="quiz__answers">
        {data.Films[answerIndex].answers.map((answer, index) =>
          <li className="quiz__answer" onClick={() => checkAnswers(data.Films[answerIndex].correctIndex, index)}>{answer}</li>
        )}
      </ul>
    </div>
  )
}

export default Films;