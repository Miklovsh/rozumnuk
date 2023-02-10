import React from "react";
import data from "../data.json"

function Music({ questionIndex, Next }) {


  // console.log(data.data.Music)
  // console.log(data.data.Music[1].question)
  // console.log(data.data.Music[1].answers)
  // console.log(data.data.Music.length);

  return (
    <div>
      <span className="quiz__timer">90</span>
      <h3 className="quiz__questions">{data.data.Music[questionIndex].question}</h3>
      <button onClick={Next}>Далі</button>
      <ul className="quiz__answers">
        <li className="quiz__answer">1</li>
        <li className="quiz__answer">2</li>
        <li className="quiz__answer">3</li>
        <li className="quiz__answer">4</li>
      </ul>
    </div>
  )
}

export default Music;