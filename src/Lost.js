import React from "react";



function Lost({ name, result }) {
  return (
    <div className="lost">
      <div className="lost__message">
        <h4 className="lost__message-title">{name} Ви програли!</h4>
        <span className="lost__message-result">Ваш результат: {result} відповідей</span>
        <div className="lost__message-help">Якщо не вдається перемогти, але цікаво який приз отримує переможець, натисніть "Хочу виграти" та отримайте правильні відповіді, після чого натисніть "Спробувати знову" та скористайтеся правильними відповідями, щоб отримати бажаний приз</div>
        <a className="lost__message-link" href="https://docs.google.com/document/d/17gBWina6X0ltnOFR2rdBCeLT8chbM_hM1tZXT1KFQwo/edit?usp=sharing" target="blank" >Хочу виграти</a>
        <a className="try-again" href="/">Спробувати знову</a>
      </div>
    </div>
  )
}

export default Lost;