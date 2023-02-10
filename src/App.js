import './App.css';
import React, { useState } from 'react';
import Start from './Start';
import Rules from './Rules';
import Categories from './Categories';
import Winner from './Winner';
import Lost from './Lost';
import Literature from './category/Literature';
import Music from './category/Music';
import Technologies from './category/Technologies';
import Sport from './category/Sport';
import Films from './category/Films';


function App() {
  const [name, setName] = useState('');
  const [studio, setStudio] = useState(false);
  const [categories, setCategories] = useState(true);
  const [rules, setRules] = useState(false);
  const [literatureCategory, setLiteratureCategory] = useState(false);
  const [musicCategory, setMusicCategory] = useState(false);
  const [sportCategory, setSportCategory] = useState(false);
  const [technologiesCategory, setTechnologiesCategory] = useState(false);
  const [filmsCategory, setFilmsCategory] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  function Next() {
    setQuestionIndex(questionIndex + 1);
  }


  function showStudio() {
    setStudio(true);
  }

  function showRules() {
    setRules(true);
  }


  return (
    <div className="App">
      {studio ? (
        <div className="studio">
          <span className="studio__result">Результат: 10 відповідей</span>
          <div className="studio__monitor">
            {categories && (
              <Categories
                setCategories={setCategories}
                setLiteratureCategory={setLiteratureCategory}
                setMusicCategory={setMusicCategory}
                setSportCategory={setSportCategory}
                setTechnologiesCategory={setTechnologiesCategory}
                setFilmsCategory={setFilmsCategory}
              />
            )};
            <div className="quiz">
              {literatureCategory && (
                <Literature
                  questionIndex={questionIndex}
                  Next={Next}
                />
              )};
              {musicCategory && (
                <Music
                  questionIndex={questionIndex}
                  Next={Next}
                />
              )};
              {sportCategory && (
                <Sport
                  questionIndex={questionIndex}
                  Next={Next}
                />
              )};
              {technologiesCategory && (
                <Technologies
                  questionIndex={questionIndex}
                  Next={Next}
                />
              )};
              {filmsCategory && (
                <Films
                  questionIndex={questionIndex}
                  Next={Next}
                />
              )};
            </div>
          </div>
        </div>
      ) : (
        <div className="start">
          <div className="container">
            {rules
              ? <Rules showStudio={showStudio} />
              : <Start setName={setName} showRules={showRules} />
            };
          </div>
        </div>
      )}
      {/* <Lost /> */}
      <Winner name={name} />
    </div>
  );
}

export default App;
