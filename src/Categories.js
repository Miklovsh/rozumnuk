import React, { useState } from "react";
import Quiz from "./Quiz";


function Categories() {

  const [literature, setLiterature] = useState(true);
  const [music, setMusic] = useState(true);
  const [sport, setSport] = useState(true);
  const [technologies, setTechnologies] = useState(true);
  const [films, setFilms] = useState(true);
  const [category, setCategory] = useState(true);



  function setClassLiterature() {
    setLiterature(false);
    setCategory(false);
  }

  function setClassMusic() {
    setMusic(false);
    setCategory(false);
  }

  function setClassSport() {
    setSport(false);
    setCategory(false);
  }

  function setClassTechnologies() {
    setTechnologies(false);
    setCategory(false);
  }

  function setClassFilms() {
    setFilms(false);
    setCategory(false);
  }


  return (
    <div className="categories" >
      {category ? (
        <ul className="categories__inner">
          <h2 className="categories__title">Категорії</h2>
          <li className={literature ? "categories__category yellow" : "categories__category yellow disable"} onClick={setClassLiterature}>Література</li>
          <li className={music ? "categories__category blue" : "categories__category blue disable"} onClick={setClassMusic}>Музика</li>
          <li className={sport ? "categories__category green" : "categories__category green disable"} onClick={setClassSport}>Спорт</li>
          <li className={technologies ? "categories__category red" : "categories__category red disable"} onClick={setClassTechnologies}>Технології</li>
          <li className={films ? "categories__category orange" : "categories__category orange disable"} onClick={setClassFilms}>Фільми</li>
        </ul>
      ) : (<Quiz />)}
    </div>
  )
}

export default Categories;
