import React, { useEffect } from "react";
import WinnerBG from "./media/fireworks-bg.mp4";
import Award from "./media/award.png";
import useSound from 'use-sound';
import winnerSong from './media/winner-song.mp3'


function Winner({ name, result }) {

  const [winner] = useSound(winnerSong);

  useEffect(() => {
    winner();
  })

  return (
    <div className="winner" >
      <div className="winner__video">
        <video className="winner__video-bg" src={WinnerBG} autoPlay muted loop> </video>
      </div>
      <div className="winner__content">
        <h1 className="winner__title">Вітаю {name} ви стали переможцем гри "Розумник"</h1>
        <img className="winner__award" src={Award} />
        <p className="winner__result">Ваш результат - {result} правильних відповідей</p>
        <a className="try-again" href="/">Спробувати знову</a>
      </div>
    </div>
  )
}

export default Winner;