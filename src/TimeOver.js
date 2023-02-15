import React from "react";

function TimeOver() {
  return (
    <div className="time-over">
      <h4 className="time-over__title">Час вийшов, Ви програли!</h4>
      <a className="try-again" href="/">Спробувати знову</a>
    </div>
  )
}

export default TimeOver;