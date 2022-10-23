import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [isShown, setIsShown] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setIsShown(!isShown)}><img src={logo} className="App-logo" alt="logo" itemType='button' /></button>

        {isShown && (
          <div>
      <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </div>
        )}

        {isShown && (<div></div>)}

      </header>
    </div>
  );
}

export default App;
