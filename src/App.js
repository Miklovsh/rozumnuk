import './App.css';
import React, {useState } from 'react';
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
import useSound from 'use-sound';
import correct from './correct.mp3';
import wrong from './wrong.mp3'


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
  const [answerIndex, setAnswerIndex] = useState(0);
  const [result, setResult] = useState(0);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);


  const checkAnswers = (correctIndex, index) => {
    if (correctIndex === index) {
      setResult(result + 1)
      correctAnswer();
    } else {
      wrongAnswer();
    }

    setQuestionIndex(questionIndex + 1);
    setAnswerIndex(answerIndex + 1);
  }

  function showStudio() {
    setStudio(true);
  }

  function showRules() {
    setRules(true);
  }


  if (questionIndex > 9 && answerIndex > 9) {
    if (result > 7) {
      return <Winner name={name} result={result} />
    } else {
      return <Lost name={name} result={result} />
    }
  }


  return (
    <div className="App">
      {studio ? (
        <div className="studio">
          <span className="studio__result">Правильних відповідей: {result}</span>
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
            )}
            <div className="quiz">
              {literatureCategory && (
                <Literature
                  questionIndex={questionIndex}
                  answerIndex={answerIndex}
                  checkAnswers={checkAnswers}
                />
              )}
              {musicCategory && (
                <Music
                  questionIndex={questionIndex}
                  answerIndex={answerIndex}
                  checkAnswers={checkAnswers}
                />
              )}
              {sportCategory && (
                <Sport
                  questionIndex={questionIndex}
                  answerIndex={answerIndex}
                  checkAnswers={checkAnswers}
                />
              )}
              {technologiesCategory && (
                <Technologies
                  questionIndex={questionIndex}
                  answerIndex={answerIndex}
                  checkAnswers={checkAnswers}
                />
              )}
              {filmsCategory && (
                <Films
                  questionIndex={questionIndex}
                  answerIndex={answerIndex}
                  checkAnswers={checkAnswers}
                />
              )}
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
    </div>
  );
}

export default App;
