import './App.css';
import React, { useState } from 'react';
import Start from './Start';
import Rules from './Rules';
import Categories from './Categories';
import Quiz from './Quiz';
import Winner from './Winner';


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
            {/* <div className="studio__message">
            <h4 className="studio__message-title">Ви програли!</h4>
            <span className="studio__message-result">Ваш результат: 5 відповідей</span>
            <button className="studio__message-btn">Який був приз за перемогу?</button>
          </div> */}
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
      <Winner name={name} />
    </div>
  );
}

export default App;
