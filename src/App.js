import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import UnitCard from './components/UnitCard';
import './index.css'
import { Button } from "@material-tailwind/react";
import Results from './components/Results';
import {useState} from 'react';


function App() {

  const characters = {
    warrior: {
      name: "Warrior",
      maxHealth: 10,
      attack: 2,
      defence: 2,
    
    },
    swordsman: {
      name: "Swordsman",
      maxHealth: 15,
      attack: 3,
      defence: 3,
    },
    knight: {
        name: "Knight",
        maxHealth: 15,
        attack: 3.5,
        defence: 3,
    },
    defender: {
      name: "Defender",
      maxHealth: 15,
      attack: 1,
      defence: 3,
    }
  }
// ///////////////////
  var battleResult = {
    attacker: {
      originalHp: 0,
      damageDone: 0,
      healthRemaining: 0,
      survived: true,
    },
    defender: {
      originalHp: 0,
      damageDone: 0,
      healthRemaining: 0,
      survived: true,
    }
  }

  // ////////////
  var selectedAttacker = {
    name: "warrior",
    maxHealth: 0,
    inputHealth: 0,
    attack: 0,
    defence: 0,
    isVeteran: false,
    isBoosted: false,
  }
  var selectedDefender = {
    name: "warrior",
    maxHealth: 0,
    inputHealth: 0,
    attack: 0,
    defence: 0,
    defence_Bonus: 1,
    isBoosted: false,
    isPoisoned: false,
    isVeteran: false,
  }


  const [charData, setCharData] = useState(characters);


  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-row mt-5 mx-10 justify-center">
        <UnitCard charData={charData} isAttacker={true}/>
        <UnitCard charData={charData} isAttacker={false}/>
        {/* {UnitCard({charData,isAttacker:false})} */}
      </div>
      <div className="flex flex-row justify-center">
        <button class="btn">Button</button>
      </div>
      <div className="flex flex-row justify-center">
        <Results />
      </div>

    </div>
  );
}

export default App;
