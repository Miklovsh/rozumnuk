import React from "react";

function Start({ setName, name, showRules }) {

  let inputName = React.createRef();

  function changeName() {
    if (inputName.current.value.length > 15) {
      alert('Категорично не рекомендуємо вводити в поле імя більше 15 символів')
    }
    setName(inputName.current.value);
  }


  return (
    <div className="start__inner">
      <h1 className="start__title">
        Ласкаво просимо до гри "Розумник"
      </h1>
      <input className="start__input-name" onChange={changeName} value={name} ref={inputName} type="text" placeholder="Введіть Ваше ім'я" />
      <button className="start__btn" onClick={showRules}>Далі</button>
      <div className="developer">
        <span className="developer__text">Розробник - </span>
        <a className="developer__link" href="https://www.linkedin.com/in/viktor-miklovsh-aa61b9205/" target="blank">Мікловш Віктор</a>
      </div>
    </div>
  )
}

export default Start;