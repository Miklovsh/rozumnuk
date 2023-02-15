import React, { useState, useEffect } from "react";
import TimeOver from "./TimeOver";


function Timer() {

  const [timer, setTimer] = useState(90);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    }
  }, [timer])


  if (timer === 0) {
    return <TimeOver />
  }


  return (
    <div>
      <span className="quiz__timer">{timer}</span>
    </div>
  )
}

export default Timer;