import React from "react";

function Lost({name, result}) {
  return (
    <div className="lost">
      <div className="lost__message">
        <h4 className="lost__message-title">{name} Ви програли!</h4>
        <span className="lost__message-result">Ваш результат: {result} відповідей</span>
        <button className="lost__message-btn">Який був приз за перемогу?</button>
        <button className="lost__message-btn">Спробувати іще раз</button>
      </div>
    </div>
  )
}

export default Lost;