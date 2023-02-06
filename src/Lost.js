import React from "react";

function Lost() {
  return(
    <div className="lost">
        <div className="lost__message">
            <h4 className="lost__message-title">Ви програли!</h4>
            <span className="lost__message-result">Ваш результат: 5 відповідей</span>
            <button className="lost__message-btn">Який був приз за перемогу?</button>
          </div>
    </div>
  )
}

export default Lost;