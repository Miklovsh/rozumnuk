import React from "react";

function Start({ setName, name, showRules }) {

  let inputName = React.createRef();

  function changeName() {
    setName(inputName.current.value);
  }

  return (
    <>
      <div className="start__inner">
        <h1 className="start__title">
          Ласкаво просимо до гри "Розумник"
        </h1>
        <input className="start__input-name" onChange={changeName} value={name} ref={inputName} type="text" placeholder="Введіть Ваше ім'я" />
        <div className="start__btn-wrapper">
          <button className="start__btn" onClick={showRules}>
            <svg width="180px" height="50px" viewBox="0 0 180 50" className="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span>Далі</span>
          </button>
        </div>
      </div>
    </>


  )
}

export default Start;