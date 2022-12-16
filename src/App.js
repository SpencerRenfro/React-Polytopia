// components
import "./App.css";
import Navbar from "./components/Navbar";
import UnitCard from "./components/UnitCard";
import "./index.css";
import { Button } from "@material-tailwind/react";
import Results from "./components/Results";
import Modal from './components/Modal'
import SingleBattle from "./components/SingleBattle";
import MultiBattle from "./components/MultiBattle";



// libraries
import { Route, Routes, Navigate, NavLink, Outlet } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";


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
    mind_bender: {
      name: "Mind_bender",
      maxHealth: 10,
      attack: 0,
      defence: 1,
      imageSource: "Mind Bender.png",
    },
    archer: {
      name: "Archer",
      maxHealth: 10,
      attack: 2,
      defence: 1,
      imageSource: "Archer.png",
    },
    catapult: {
      name: "Catapult",
      maxHealth: 10,
      attack: 4,
      defence: 0,
      imageSource: "Catapult.png",
    },
    giant: {
      name: "Giant",
      maxHealth: 40,
      attack: 5,
      defence: 4,
      imageSource: "Giant.png",
    },
    rider: {
      name: "Rider",
      maxHealth: 10,
      attack: 2,
      defence: 1,
      imageSource: "Rider.png",
    },
    boat: {
      name: "Boat",
      maxHealth: 10,
      attack: 1,
      defence: 1,
      imageSource: "Boat.png",
    },
    ship: {
      name: "Ship",
      maxHealth: 10,
      attack: 2,
      defence: 2,
      imageSource: "Ship.png",
    },
    battleShip: {
      name: "Battleship",
      maxHealth: 10,
      attack: 4,
      defence: 3,
      imageSource: "Battleship.png",
    }

  };
// 8 Giant 40 5 4
// 9 Hexapod 5 3 1
// 10 Doomux 20 4 2
// 11 Kiton 20 1 3
// 12 Raychi 15 3 2
// 13 Phychi 5 1 1
// 14 Exida 10 3 1
// 15 Centipede 20 4 3
// 16 Shaman 10 1 1
// 17 Ice_Fortress 20 4 3
// 18 Gaami 30 4 4
// 19 Mooni 10 0 2
// 20 Ice_Archer 10 0.1 1
// 21 Amphibian 10 2 1
// 22 Tridention 15 3 1
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
    maxHealth: 10,
    inputHealth: 10,
    attack: 2,
    defence: 2,
    isVeteran: false,
    isBoosted: false,
    imageSource: "Warrior.png",
  };
  var selectedDefender = {
    name: "warrior",
    maxHealth: 10,
    inputHealth: 10,
    attack: 2,
    defence: 2,
    default_Bonus: 1,
    defence_Bonus: false,
    isCityWall: false,
    isBoosted: false,
    isPoisoned: false,
    isVeteran: false,
    imageSource: "Warrior.png",
  };


//results logic
// useEffect(() => {
//   // for( var prop in characters ) {
//   //   if(selectedAttacker.name === prop){
//   //     selectedAttacker.attack = prop.attack
//   //   }
//   //   else if(selectedDefender.name === prop){
//   //     selectedDefender.attack = prop.attack
//   //   }
//   // }
// },[selectedAttacker, selectedDefender]);  


  

// modal button code


// 

  // const [defenseBonus, setDefenseBonus] = useState(selectedDefender.default_Bonus);

  const [resultSelectionAttacker, setResultSelectionAttacker] = useState(selectedAttacker);
  const [resultSelectionDefender, setResultSelectionDefender] = useState(selectedDefender);
 
  const [charData, setCharData] = useState(characters);
  const [selectedAttackerData, setSelectedAttackerData] = useState(selectedAttacker);
  const [selectedDefenderData, setSelectedDefenderData] = useState(selectedDefender);

  const [modalPopup, setModalPopup] = useState(false);  
  const [isModalAttacker, setIsModalAttacker] = useState(false);

  function updateData(isAttacker, updatedData){
    if(isAttacker){
      setSelectedAttackerData({ ...selectedAttacker, ...updatedData });
    }else{
      setSelectedDefenderData({...selectedDefender,  ...updatedData});
    }
  }

  function triggerModal(isModalAttacker) {
    setModalPopup(!modalPopup);
    setIsModalAttacker(isModalAttacker);
  }

  function updateModalSelection(charData){
    charData.inputHealth = charData.maxHealth;
    if(isModalAttacker){
      setSelectedAttackerData({ ...selectedAttacker, ...charData });
    } else{
      setSelectedDefenderData({ ...selectedDefender, ...charData });
    }
    triggerModal(false);
  }
  return (
    <div className="App">
      <Navbar/>


        {/* <Routes>
          <Route path="/" />
          <Route path="multibattle" element={<MultiBattle />}/>
        </Routes> */}

      <div className="flex flex-row mt-5 mx-10 justify-center gap-6">

        <UnitCard
          selectedUnitData={selectedAttackerData}
          isAttacker={true}
          setModalPopup={setModalPopup}
          modalPopup={modalPopup}
          triggerModal={triggerModal}
          updateData={updateData}
        />
        <UnitCard
          /* {UnitCard({charData,isAttacker:false})} */
          // defenseBonus={defenseBonus}
          selectedUnitData={selectedDefenderData}
          isAttacker={false}
          setModalPopup={setModalPopup}
          modalPopup={modalPopup}
          characterList={characters}
          triggerModal={triggerModal}
          updateData={updateData}
        />
        

      </div>
      <Modal 
        isModalAttacker={isModalAttacker}
        modalPopup={modalPopup}
        triggerModal={triggerModal}
        charData={charData}
        updateModalSelection={updateModalSelection}
      />





      <div className="flex flex-row justify-center">

        <Results 
          resultSelectionAttacker={resultSelectionAttacker}
          resultSelectionDefender={resultSelectionDefender}
          isModalAttacker={isModalAttacker}
          selectedUnitDefenderData={selectedDefenderData}
          selectedUnitAttackerData={selectedAttackerData}
        />

      </div>

      {/* <label htmlFor="my-modal" className="btn modal-button">open modal</label> */}


    </div>
  );
}

export default App;








    {/* <input type="checkbox" checked={modalPopup} id="my-modal" className="modal-toggle" />
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
            <button className="btn btn-primary" onClick={() => setModalPopup(!modalPopup)}>Select Unit</button> */}
          {/* </div>
        </div> */}
      {/* </div> */}