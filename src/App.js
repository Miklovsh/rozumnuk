import './App.css';
import Start from './Start';

function App() {
  return (
    <div className="App">
      {/* <Start /> */}
      <div className="studio">
        <div className="studio__monitor">
          <ul className="studio__categories">
            <h2 className="studio__categories-title">Категорії</h2>
            <li className="studio__category yellow">Література</li>
            <li className="studio__category blue">Музика</li>
            <li className="studio__category green">Спорт</li>
            <li className="studio__category red">Технології</li>
            <li className="studio__category orange">Фільми</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
