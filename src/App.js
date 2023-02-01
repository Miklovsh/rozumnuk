import './App.css';
import Start from './Start';
import Categories from './Categories';
import Quiz from './Quiz';
import Winner from './Winner';

function App() {

  return (
    <div className="App">
      {/* <Start /> */}
      <div className="studio">
        <span className="studio__result">Результат: 10 відповідей</span>
        <div className="studio__monitor">
          {/* <Categories /> 
           <Quiz />  */}
          <div className="studio__message">
            <h4 className="studio__message-title">Ви програли!</h4>
            <span className="studio__message-result">Ваш результат: 5 відповідей</span>
            <button className="studio__message-btn">Який був приз за перемогу?</button>
          </div>
        </div>
      </div>
      {/* <Winner /> */}
    </div>
  );
}

export default App;
