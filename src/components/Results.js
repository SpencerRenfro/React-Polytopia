import React, {useState} from 'react'

export default function Results(props) {
  let imageAttacker = `${process.env.PUBLIC_URL}/Attacker-images/${props.selectedUnitAttackerData.imageSource}`;
  let imageDefender = `${process.env.PUBLIC_URL}/Defender-images/${props.selectedUnitDefenderData.imageSource}`;

  var attackerMaxHPToUse = props.selectedUnitAttackerData.maxHealth;
  var defenderMaxHPToUse = props.selectedUnitDefenderData.maxHealth;
  var posionReduceDamage = props.selectedUnitDefenderData.defence;

  var boostedDamageToUse = props.selectedUnitAttackerData.attack;

  // reset button
  // function resetBattle(){
  //   if(props.isAttacker){
  //     props.setSelectedAttackerData(...props.defaultSelectedAttacker);
  //   }
  // }

  // function updateInput(event, valueName) {
  //   const newSelectedUnitData = {...props.selectedUnitData};
  //   if(valueName === "inputHealth"){
      
  //     newSelectedUnitData[valueName] = parseInt(event.target.value);
  //   }
  //   else{
  //     newSelectedUnitData[valueName] = event.target.checked;
  //   }

  //   console.log(event.target.value + "event-target-value");

  //   props.updateData(props.isAttacker, newSelectedUnitData);
  // }

  function resetButton() {
    
    props.resetData(props.isAttacker, props.defaultSelectedAttacker)
    
  }

  // veteran for offense
  if (props.selectedUnitAttackerData.isVeteran) {
    attackerMaxHPToUse = attackerMaxHPToUse + 5;
  }

  // veteran for defense
  if (props.selectedUnitDefenderData.isVeteran) {
    defenderMaxHPToUse = defenderMaxHPToUse + 5;
  }

  //  posion
  if (props.selectedUnitDefenderData.isPoisoned) {
    props.selectedUnitDefenderData.default_Bonus = 0.8;
  } else {
    props.selectedUnitDefenderData.default_Bonus = 1;
  }

  //  boosted
  if (props.selectedUnitAttackerData.isBoosted) {
    boostedDamageToUse = boostedDamageToUse + 0.5;
  }

  var defenceForce =
    props.selectedUnitDefenderData.defence *
    (props.selectedUnitDefenderData.inputHealth / defenderMaxHPToUse) *
    props.selectedUnitDefenderData.default_Bonus;

  var attackForce =
    boostedDamageToUse *
    (props.selectedUnitAttackerData.inputHealth / attackerMaxHPToUse);

  //  console.log(props.selectedUnitDefenderData.default_Bonus);
  //   removed * props.selectedUnitDefenderData.defence_Bonus; at the end of line 8
  var totalDamage = attackForce + defenceForce;

  var attackResult = Math.round(
    (attackForce / totalDamage) * boostedDamageToUse * 4.5
  );

  var defenceResult = Math.round(
    (defenceForce / totalDamage) * props.selectedUnitDefenderData.defence * 4.5
  );

  //  console.log(attackResult);
  //  console.log(defenceResult);
  //  console.log(props.selectedUnitAttackerData.inputHealth);

  var offence_status_HP =
    props.selectedUnitAttackerData.inputHealth - defenceResult;
  var defence_status_HP =
    props.selectedUnitDefenderData.inputHealth - attackResult;

  var offenceStatus;
  var defenceStatus;

  if (offence_status_HP > 0) {
    offenceStatus = "Survived";
  } else {
    offenceStatus = "Defeated";
  }
  if (defence_status_HP > 0) {
    defenceStatus = "Survived";
  } else {
    defenceStatus = "Defeated";
  }

  return (
    <div>








      <div className="card w-10/12 bg-base-100 shadow-xl py-10 mx-auto my-4">
  <div className="card-body items-center text-center">
  
    <h2 className="card-title"> <img src="/misc-images/SmallSwords.png" />Fight Results <img src="/misc-images/SmallSwords.png" /></h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"  onClick={() => resetButton()}>Reset Battle</button>
      <button className="btn btn-primary">Save Battle Results</button>
    </div>
  </div>

  <div class="grid grid-cols-8 gap-1 items-center">
        <div>Offense</div>
        <div>({offence_status_HP})</div>
        <div class="gap-0 justify-self-end damageTaken">(-{defenceResult})</div>
        <div><img src={imageAttacker} width={50} height={50} className="rounded-xl"/> </div>
        <div>Attack:{props.selectedUnitAttackerData.attack} boosted Attack:{boostedDamageToUse}</div>
        <div>Defense: {props.selectedUnitAttackerData.defence}</div>
        <div>Original HP {props.selectedUnitAttackerData.inputHealth} (max:{attackerMaxHPToUse})</div>
        <div>Status:{defenceStatus}</div>
        <div>Defense</div>
        <div>({defence_status_HP})</div>
        <div class="gap-0 justify-self-end damageTaken">(-{defenceResult})</div>
        <div> {<img src={imageDefender} width={50} />}</div>
        <div>Attack:{props.selectedUnitDefenderData.attack}</div>
        <div>Defense: {props.selectedUnitDefenderData.defence}</div>
        <div>Original HP {props.selectedUnitDefenderData.inputHealth} (max:{defenderMaxHPToUse})</div>
        <div>Status:{defenceStatus}</div>
      </div>
</div>


      </div>

      
  );
}
