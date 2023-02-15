import React from "react";
import data from "../data.json";
import Timer from "../Timer";

function Music({ checkAnswers, answerIndex, questionIndex }) {

  return (
    <div>
      <Timer />
      <h3 className="quiz__questions">{data.Music[questionIndex].question}</h3>
      <ul className="quiz__answers">
        {data.Music[answerIndex].answers.map((answer, index) =>
          <li className="quiz__answer" onClick={() => checkAnswers(data.Music[answerIndex].correctIndex, index)}>{answer}</li>
        )}
      </ul>
    </div>
  )
}

export default Music;