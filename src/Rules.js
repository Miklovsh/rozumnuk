import React from "react";

function Rules({ showStudio }) {
  return (
    <div className="start__rules">
      <div className="start__rules-inner">
        <h2 className="start__rules-title">Правила гри</h2>
        <div className="start__rules-text">В грі "Розумник" доступні 5 категорій : Музика, Фільми, Спорт, Література, Технології. Гравець обирає категорію і протягом 90 секунд відповідає на 10 запитань по дані тематиці. Кожне запитання має чотири варіанти відповідей. Коли гравець відповість на всі запитання або закінчиться 90 секунд, гравець знову повертається до вибору другої категорії. Гравець з п'яти можливих категорій обирає три категорії. На питання з трьох обраних гравцем категорій для перемоги потрібно зробити 27 правильних відповідей(90%).</div>
        <button className="start__rules-btn" onClick={showStudio}>Грати</button>
      </div>
    </div>
  )
}

export default Rules;