import React from "react";

function Categories(
  { setCategories,
    setLiteratureCategory,
    setMusicCategory,
    setSportCategory,
    setTechnologiesCategory,
    setFilmsCategory
  }) {


  function chooseLiterature() {
    setLiteratureCategory(true);
    setCategories(false);
  }

  function chooseMusic() {
    setMusicCategory(true);
    setCategories(false);
  }

  function chooseSport() {
    setSportCategory(true);
    setCategories(false);
  }

  function chooseTechnologies() {
    setTechnologiesCategory(true);
    setCategories(false);
  }

  function chooseFilms() {
    setFilmsCategory(true);
    setCategories(false);
  }


  return (
    <div className="categories" >
      <ul className="categories__inner">
        <h2 className="categories__title">Категорії</h2>
        <li className="categories__category yellow" onClick={chooseLiterature}>Література</li>
        <li className="categories__category blue" onClick={chooseMusic}>Музика</li>
        <li className="categories__category green" onClick={chooseSport}>Спорт</li>
        <li className="categories__category red" onClick={chooseTechnologies}>Технології</li>
        <li className="categories__category orange" onClick={chooseFilms}>Фільми</li>
      </ul>
    </div>
  )
}

export default Categories;
