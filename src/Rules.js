import React from "react";

function Rules({ showStudio }) {
  return (
    <div className="start__rules">
      <div className="start__rules-inner">
        <h2 className="start__rules-title">Правила гри</h2>
        <div className="start__rules-text"><b>Рекомендуємо грати зі звуком або в навушниках</b> <br /><br /> В грі "Розумник" доступні 5 категорій : Музика, Фільми, Спорт, Література, Технології. Гравець обирає категорію і протягом 90 секунд відповідає на 10 запитань по дані тематиці. Кожне запитання має чотири варіанти відповідей. Для перемоги потрібно зробити 8 та більше правильних відповідей.</div>
        <button className="start__rules-btn" onClick={showStudio}>Грати</button>
      </div>
    </div>
  )
}

export default Rules;