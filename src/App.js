import './App.css';
import Start from './Start';
import Categories from './Categories';
import Quiz from './Quiz';
import Winner from './Winner';

function App() {
  return (
    <div className="App">
      {/* <Start /> */}
      {/* <div className="studio">
        <div className="studio__monitor">
          <Categories /> 
           <Quiz /> 
        </div>
      </div> */}
      <Winner />
    </div>
  );
}

export default App;
