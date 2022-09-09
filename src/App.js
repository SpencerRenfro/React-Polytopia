import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import UnitCard from "./components/UnitCard";
import "./index.css";
import { Button } from "@material-tailwind/react";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const characters = {
    warrior: {
      name: "Warrior",
      maxHealth: 10,
      attack: 2,
      defence: 2,
      imageSource: "Warrior.png",
    },
    swordsman: {
      name: "Swordsman",
      maxHealth: 15,
      attack: 3,
      defence: 3,
      imageSource: "Swordsman.png",
    },
    knight: {
      name: "Knight",
      maxHealth: 15,
      attack: 3.5,
      defence: 3,
      imageSource: "Knight.png",
    },
    defender: {
      name: "Defender",
      maxHealth: 15,
      attack: 1,
      defence: 3,
      imageSource: "Defender.png",
    },
  };
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
    },
  };

  // ////////////
  var selectedAttacker = {
    name: "warrior",
    maxHealth: 0,
    inputHealth: 0,
    attack: 0,
    defence: 0,
    isVeteran: false,
    isBoosted: false,
    imageSource: "Warrior.png",
  };
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
    imageSource: "Warrior.png",
  };

  const [charData, setCharData] = useState(characters);
  const [selectedAttackerData, setSelectedAttackerData] =
    useState(selectedAttacker);
  const [selectedDefenderData, setSelectedDefenderData] =
    useState(selectedDefender);

  const [modalPopup, setModalPopup] = useState(false);  

  function testFunction() {
    console.log("FIRED");
    
  }

  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-row mt-5 mx-10 justify-center gap-6">
        <UnitCard
          selectedUnitData={selectedAttackerData}
          isAttacker={true}
          setModalPopup={setModalPopup}
          modalPopup={modalPopup}
        />
        <UnitCard
          selectedUnitData={selectedDefenderData}
          isAttacker={false}
          setModalPopup={setModalPopup}
          modalPopup={modalPopup}
        />
        {/* {UnitCard({charData,isAttacker:false})} */}
      </div>
      <div className="flex flex-row justify-center">
        <button class="btn">Button</button>
      </div>
      <div className="flex flex-row justify-center">
        <Results />
      </div>

      <label htmlFor="my-modal" className="btn modal-button">open modal</label>
    <input type="checkbox" checked={modalPopup} id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
            </label>
            <button class="btn btn-primary" onClick={() => setModalPopup(!modalPopup)}>Select Unit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
