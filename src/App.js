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
      veteran: true,
      imageSource: "Warrior.png",
      objectID: "Warrior",
    },
    swordsman: {
      name: "Swordsman",
      maxHealth: 15,
      attack: 3,
      defence: 3,
      veteran: true,
      imageSource: "Swordsman.png",
      objectID: "Swordsman",
    },
    knight: {
      name: "Knight",
      maxHealth: 10,
      attack: 3.5,
      defence: 3,
      veteran: true,
      imageSource: "Knight.png",
      objectID: "Knight",
    },
    defender: {
      name: "Defender",
      maxHealth: 15,
      attack: 1,
      defence: 3,
      veteran: true,
      imageSource: "Defender.png",
      objectID: "Defender",
    },
    mind_bender: {
      name: "MindBender",
      maxHealth: 10,
      attack: 0,
      defence: 1,
      veteran: true,
      imageSource: "Mind Bender.png",
      objectID: "MindBender",
    },
    archer: {
      name: "Archer",
      maxHealth: 10,
      attack: 2,
      defence: 1,
      veteran: true,
      imageSource: "Archer.png",
      objectID: "Archer",
    },
    catapult: {
      name: "Catapult",
      maxHealth: 10,
      attack: 4,
      defence: 0,
      veteran: true,
      imageSource: "Catapult.png",
      objectID: "Catapult",
    },
    giant: {
      name: "Giant",
      maxHealth: 40,
      attack: 5,
      defence: 4,
      veteran: false,
      imageSource: "Giant.png",
      objectID: "Giant",
    },
    rider: {
      name: "Rider",
      maxHealth: 10,
      attack: 2,
      defence: 1,
      veteran: true,
      imageSource: "Rider.png",
      objectID: "Rider",
    },
    cloak: {
      name: "Cloak",
      maxHealth: 5,
      attack: 0,
      defence: 0.5,
      veteran: false,
      imageSource: "Cloak.png",
      objectID: "Cloak",
    },
    dagger: {
      name: "Dagger",
      maxHealth: 10,
      attack: 2,
      defence: 2,
      veteran: false,
      imageSource: "Dagger.png",
      objectID: "Dagger",
    },
    dinghy: {
      name: "Dinghy",
      maxHealth: 5,
      attack: 0,
      defence: 0.5,
      veteran: false,
      imageSource: "Dinghy.png",
      objectID: "Dinghy",
    },
    boat: {
      name: "Boat",
      maxHealth: 10,
      attack: 1,
      defence: 1,
      veteran: false,
      imageSource: "Boat.png",
      objectID: "Boat",
    },
    ship: {
      name: "Ship",
      maxHealth: 10,
      attack: 2,
      defence: 2,
      veteran: false,
      imageSource: "Ship.png",
      objectID: "Ship",
    },
    battle_ship: {
      name: "Battle_Ship",
      maxHealth: 15,
      carryingUnit: "Warrior",
      attack: 4,
      defence: 3,
      veteran: false,
      imageSource: "Battleship.png",
      objectID: "Battle_Ship",
    },
    polytaur: {
      name: "Polytaur",
      maxHealth: 15,
      attack: 3,
      defence: 1,
      veteran: true,
      imageSource: "Polytaur.png",
      objectID: "Polytaur",
    },
    navalon: {
      name: "Navalon",
      maxHealth: 30,
      attack: 4,
      defence: 4,
      veteran: false,
      imageSource: "Navalon.png",
      objectID: "Navalon",
    },
    dragon_egg: {
      name: "Dragon_Egg",
      maxHealth: 10,
      attack: 0,
      defence: 2,
      veteran: false,
      imageSource: "DragonEgg.png",
      objectID: "DragonEgg",
    },
    baby_dragon: {
      name: "Baby_Dragon",
      maxHealth: 15,
      attack: 3,
      defence: 3,
      veteran: false,
      imageSource: "BabyDragon.png",
      objectID: "BabyDragon",
    },
    dragon: {
      name: "Dragon",
      maxHealth: 20,
      attack: 4,
      defence: 3,
      veteran: false,
      imageSource: "FireDragon.png",
      objectID: "FireDragon",
    },
    amphibian: {
      name: "Amphibian",
      maxHealth: 10,
      attack: 2,
      defence: 1,
      veteran: true,
      imageSource: "Amphibian.png",
      objectID: "Amphibian",
    },
    tridention: {
      name: "Tridention",
      maxHealth: 15,
      attack: 3,
      defence: 1,
      imageSource: "Tridention.png",
      objectID: "Tridention",
    },
    crab: {
      name: "Crab",
      maxHealth: 40,
      attack: 4,
      defence: 4,
      veteran: false,
      imageSource: "Crab.png",
      objectID: "Crab",
    },
    ice_archer: {
      name: "Ice_Archer",
      maxHealth: 10,
      attack: 0.1,
      defence: 1,
      veteran: true,
      imageSource: "IceArcher.png",
      objectID: "IceArcher",
    },
    battle_sled: {
      name: "Battle_Sled",
      maxHealth: 15,
      attack: 3,
      defence: 2,
      veteran: true,
      imageSource: "BattleSled.png",
      objectID: "BattleSled",
    },
    gaami: {
      name: "Gaami",
      maxHealth: 30,
      attack: 4,
      defence: 4,
      veteran: false,
      imageSource: "Gaami.png",
      objectID: "Gaami",
    },
    ice_fortress: {
      name: "Ice_Fortress",
      maxHealth: 20,
      attack: 4,
      defence: 3,
      veteran: true,
      imageSource: "IceFortress.png",
      objectID: "Ice_Fortress",
    },
    mooni: {
      name: "Mooni",
      maxHealth: 10,
      attack: 0,
      defence: 2,
      veteran: false,
      imageSource: "Mooni.png",
      objectID: "Mooni",
    },
    hexapod: {
      name: "Hexapod",
      maxHealth: 5,
      attack: 3,
      defence: 1,
      veteran: true,
      imageSource: "Hexapod.png",
      objectID: "Hexapod",
    },
    kiton: {
      name: "Kiton",
      maxHealth: 15,
      attack: 1,
      defence: 3,
      veteran: true,
      imageSource: "Kiton.png",
      objectID: "Kiton",
    },
    phychi: {
      name: "Phychi",
      maxHealth: 5,
      attack: 1,
      defence: 2,
      veteran: true,
      imageSource: "Phychi.png",
      objectID: "Phychi",
    },
    shaman: {
      name: "Shaman",
      maxHealth: 10,
      attack: 1,
      defence: 1,
      veteran: false,
      imageSource: "Shaman.png",
      objectID: "Shaman",
    },
    exida: {
      name: "Exida",
      maxHealth: 10,
      attack: 3,
      defence: 1,
      veteran: true,
      imageSource: "Exida.png",
      objectID: "Exida",
    },
    raychi: {
      name: "Raychi",
      maxHealth: 15,
      attack: 3,
      defence: 2, 
      veteran: true,
      imageSource: "Raychi.png",
      objectID: "Raychi",
    },
    doomux: {
      name: "Doomux",
      maxHealth: 20,
      attack: 4,
      defence: 2,
      veteran: true,
      imageSource: "Doomux.png",
      objectID: "Doomux",
    },
    centipede: {
      name: "Centipede",
      maxHealth: 20,
      attack: 4,
      defence: 3,
      veteran: false,
      imageSource: "Centipede.png",
      objectID: "Centipede",
    },
    segment: {
      name: "Segment",
      maxHealth: 10,
      attack: 2,
      defence: 2,
      veteran: false,
      imageSource: "Segment.png",
      objectID: "Segment",
    },
    bunny: {
      name: "Bunny",
      maxHealth: 20,
      attack: 5,
      defence: 1,
      veteran: false,
      imageSource: "Bunny.png",
      objectID: "Bunny",
    },
    bunta: {
      name: "Bunta",
      maxHealth: 20,
      attack: 5,
      defence: 1,
      veteran: false,
      imageSource: "Bunta.png",
      objectID: "Bunta",
    },

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


  var defaultSelectedAttacker = {
    name: "warrior",
    maxHealth: 10,
    inputHealth: 10,
    attack: 2,
    defence: 2,
    isVeteran: false,
    isBoosted: false,
    imageSource: "Warrior.png",
    isBoat: false,
    isShip: false,
    isBattleShip: false,
  };
  var defaultSelectedDefender = {
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

  // for resetting checked boxed

//   const [uncheckedBox, setUncheckedBox] = useState('');

//   function unCheck(i){
//     let ref = 'ref_' + i;
//     this.refs[ref].checked = !this.refs[ref].checked;
//  }

    function resetData(isAttacker, updatedData){
    setSelectedAttackerData(updatedData);
    setSelectedDefenderData(defaultSelectedDefender);
  }


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

    if(charData.name === "boat"){
      charData.isBoat = true;
    }
    else if(charData.name === "ship"){
      charData.isShip = true;
    }

    else if(charData.anem === "battleShip"){
      charData.isBattleShip = true;
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
          defaultSelectedAttacker={defaultSelectedAttacker}
          defaultSelectedDefender={selectedDefender}
          setSelectedAttackerData={setSelectedAttackerData}
          resetData={resetData}
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