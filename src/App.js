import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import UnitCard from './components/UnitCard';
import './index.css'
import { Button } from "@material-tailwind/react";
 



function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="flex flex-row mt-5 mx-10 justify-center">
      <UnitCard />
      <UnitCard />
    </div>
    <div className="flex flex-row justify-center">
    <Button>Calculate Results</Button>
    </div>
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

        <h1 className="text-3xl font-bold underline">
        Hello world!
        </h1>
      </header>
    </div>
  );
}

export default App;
