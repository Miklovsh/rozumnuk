import React from "react";
import WinnerBG from "./fireworks-bg.mp4";
import Award from "./award.png";


function Winner({ name, result }) {
  return (
    <div className="winner" >
      <div className="winner__video">
        <video className="winner__video-bg" src={WinnerBG} autoPlay muted loop> </video>
      </div>
      <div className="winner__content">
        <h1 className="winner__title">Вітаю {name} ви стали переможцем гри "Розумник"</h1>
        <img className="winner__award" src={Award} />
        <p className="winner__result">Ваш результат - {result} правильних відповідей</p>
      </div>
    </div>
  )
}

export default Winner;