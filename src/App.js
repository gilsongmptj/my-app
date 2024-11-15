import logo from './logo.svg';
import './App.css';
import {useStates, useEffect} from 'react';


function App() {

    async function  callProducts(){
      const response = await fetch('https://posgrad-backend-production.up.railway.app/produtos');
      const data = response.JSON();
      console.log(data);
  
    }

    callProducts()
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
