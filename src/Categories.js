import React from "react";

function Categories() {
  return (
    <div className="categories" >
      <ul className="categories__inner">
        <h2 className="categories__title">Категорії</h2>
        <li className="categories__category yellow">Література</li>
        <li className="categories__category blue">Музика</li>
        <li className="categories__category green">Спорт</li>
        <li className="categories__category red">Технології</li>
        <li className="categories__category orange">Фільми</li>
      </ul>
    </div>
  )
}

export default Categories;