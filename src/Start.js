import React from "react";

function Start() {
  return (
    <div className="start">
      <div className="container">
        <div className="start__inner">
          <h1 className="start__title">
            Ласкаво просимо до гри "Розумник"
          </h1>
          <input className="start__input-name" type="text" placeholder="Введіть Ваше ім'я" />
          <div className="start__btn-wrapper">
            <button className="start__btn">
              <svg width="180px" height="50px" viewBox="0 0 180 50" className="border">
                <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
              </svg>
              <span>Далі</span>
            </button>
          </div>
        </div>
        {/* <div className="start__rules">
      <h2 className="start__rules-title">Правила гри</h2>
      <div className="start__rules-text">В грі "Розумник" доступні 5 категорій : Музика, Фільми, Спорт, Література, Технології. Гравець обирає категорію і протягом 90 секунд відповідає на 10 запитань по дані тематиці. Кожне запитання має чотири варіанти відповідей. Коли гравець відповість на всі запитання або закінчиться 90 секунд, гравець знову повертається до вибору другої категорії. Гравець з п'яти можливих категорій обирає три категорії. На питання з трьох обраних гравцем категорій для перемоги потрібно зробити 27 правильних відповідей(90%).</div>
      <button className="start__rules-btn">Грати</button>
    </div> */}
      </div>
    </div>
  )
}

export default Start;