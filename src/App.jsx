import './App.scss';
import Card from "./Card.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Github Profile App
        </p>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Card />
      </header>
    </div>
  );
}

export default App;
