import './App.css';
import Start from './Start';
import Categories from './Categories';

function App() {
  return (
    <div className="App">
      {/* <Start /> */}
      <div className="studio">
        <div className="studio__monitor">
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default App;
