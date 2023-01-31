import React from "react";

function Quiz() {
  return (
    <div className="quiz">
      <span className="quiz__timer">90</span>
      <h3 className="quiz__questions">Оберіть найпопулярніші фронтенд бібліотеки для створення web single page application?</h3>
      <ul className="quiz__answers">
        <li className="quiz__answer">React, Vue.js, Angular</li>
        <li className="quiz__answer">Spring Framework, Vaadin, Hibernate</li>
        <li className="quiz__answer">React Native, Flutter, Framework7</li>
        <li className="quiz__answer">Laravel, CodeIgniter, Symfony</li>
      </ul>
    </div>
  )
}

export default Quiz;