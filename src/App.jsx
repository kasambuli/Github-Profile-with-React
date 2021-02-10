import './App.scss';
import CardList from './Components/CardList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Github Profile App
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CardList />
      </header>
    </div>
  );
}

export default App;
