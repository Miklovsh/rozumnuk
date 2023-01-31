import './App.css';
import Start from './Start';
import Categories from './Categories';
import Quiz from './Quiz';

function App() {
  return (
    <div className="App">
      {/* <Start /> */}
      <div className="studio">
        <div className="studio__monitor">
          {/* <Categories /> */}
          <Quiz />
        </div>
      </div>
    </div>
  );
}

export default App;
