import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from './components/NewComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactor
        </a>
        <NewComponent name="world" imgUrl="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg"/>
        <NewComponent name="codejoy" imgUrl="https://i.ytimg.com/vi/SczQEopiWmE/maxresdefault.jpg"/>
        <NewComponent name="codejoy" imgUrl="https://i.ytimg.com/vi/auaeyF1wspc/maxresdefault.jpg"/>

      </header>
    </div>
  );
}

export default App;
