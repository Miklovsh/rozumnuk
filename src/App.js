import './App.css';
import React, { useState } from 'react';
import Start from './Start';
import Rules from './Rules';
import Categories from './Categories';
import Quiz from './Quiz';
import Winner from './Winner';
import Lost from './Lost';


function App() {

  const [name, setName] = useState('');
  const [studio, setStudio] = useState(false);
  const [categories, setCategories] = useState(true);
  const [rules, setRules] = useState(false);


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
            {categories ? (
              <Categories />
            ) : (
              <Quiz />
            )}
          </div>
        </div>
      ) : (
        <div className="start">
          <div className="container">
            {rules
              ? <Rules showStudio={showStudio} />
              : <Start setName={setName} showRules={showRules} />
            }
          </div>
        </div>
      )}
      {/* <Lost /> */}
      <Winner name={name} />
    </div>
  );
}

export default App;
