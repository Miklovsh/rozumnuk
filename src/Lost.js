import React from "react";

function Lost({ name, result }) {


  return (
    <div className="lost">
      <div className="lost__message">
        <h4 className="lost__message-title">{name} Ви програли!</h4>
        <span className="lost__message-result">Ваш результат: {result} відповідей</span>
        <a className="try-again" href="/">Спробувати знову</a>
      </div>
    </div>
  )
}

export default Lost;