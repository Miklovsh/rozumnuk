import React from "react";

function Categories(
  { setCategories,
    setLiteratureCategory,
    setMusicCategory,
    setSportCategory,
    setTechnologiesCategory,
    setFilmsCategory
  }) {

  const chooseCategory = (setState) => {
    setState(true);
    setCategories(false);
  }

  return (
    <div className="categories" >
      <ul className="categories__inner">
        <h2 className="categories__title">Категорії</h2>
        <li className="categories__category yellow" onClick={() => chooseCategory(setLiteratureCategory)}>Література</li>
        <li className="categories__category blue" onClick={() => chooseCategory(setMusicCategory)}>Музика</li>
        <li className="categories__category green" onClick={() => chooseCategory(setSportCategory)}>Спорт</li>
        <li className="categories__category red" onClick={() => chooseCategory(setTechnologiesCategory)}>Технології</li>
        <li className="categories__category orange" onClick={() => chooseCategory(setFilmsCategory)}>Фільми</li>
      </ul>
    </div>
  )
}

export default Categories;
