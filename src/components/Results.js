import React, { useState } from "react";

export default function Results(props) {
  let imageAttacker = `${process.env.PUBLIC_URL}/Attacker-images/${props.selectedUnitAttackerData.imageSource}`;
  let imageDefender = `${process.env.PUBLIC_URL}/Defender-images/${props.selectedUnitDefenderData.imageSource}`;
  let defeatedImage = "/misc-images/Vengir_Skull.png}";

  var attackerMaxHPToUse = props.selectedUnitAttackerData.maxHealth;
  var defenderMaxHPToUse = props.selectedUnitDefenderData.maxHealth;
  var posionReduceDamage = props.selectedUnitDefenderData.defence;

  var boostedDamageToUse = props.selectedUnitAttackerData.attack;
  var defenseBonus = props.selectedUnitDefenderData.default_Bonus;

  var defenseBonusTotal = props.selectedUnitDefenderData.defence * 1.5;
  var defenseCityWallTotal = props.selectedUnitDefenderData.defence * 2.0;

  var veteranBuff = 5;

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

  // defense bonuses
  if (
    props.selectedUnitDefenderData.defence_Bonus &&
    !props.selectedUnitDefenderData.cityWall
  ) {
    props.selectedUnitDefenderData.default_Bonus =
      props.selectedUnitDefenderData.default_Bonus * 1.5;
  } else if (props.selectedUnitDefenderData.isCityWall) {
    props.selectedUnitDefenderData.default_Bonus =
      props.selectedUnitDefenderData.default_Bonus * 4;
  }

  // reset button
  function resetButton() {
    props.resetData(props.isAttacker, props.defaultSelectedAttacker);
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


  // logic for offense defeating defender for retaliation damage

  var attackResult = Math.round(
    (attackForce / totalDamage) * boostedDamageToUse * 4.5
  );

  var defenceResult = Math.round(
    (defenceForce / totalDamage) * props.selectedUnitDefenderData.defence * 4.5
  );

  var defence_status_HP =
  props.selectedUnitDefenderData.inputHealth - attackResult;


  // if (props.defence_status_HP > 0) {

  //   var offence_status_HP =
  //     props.selectedUnitAttackerData.inputHealth - defenceResult;

  //   var defenceResult = Math.round(
  //     (defenceForce / totalDamage) *
  //       props.selectedUnitDefenderData.defence *
  //       4.5
  //   );
  // } else {
  //   var offence_status_HP = props.selectedUnitAttackerData.inputHealth - 0;
  //   var defenceResult = 0;
  // }
 
  // original

  var offence_status_HP =
  props.selectedUnitAttackerData.inputHealth - defenceResult;
  var defence_status_HP =
  props.selectedUnitDefenderData.inputHealth - attackResult;

  var offenceStatus = {
    Survived: true,
    Title: "Survived",
    value: props.offence_status_HP,
  };

  var defenceStatus = {
    Survived: true,
    Title: "Survived",
    value: props.defence_status_HP,
  };

  if (offence_status_HP > 0) {
    offenceStatus.Survived = true;
  } else {
    offenceStatus.Survived = false;
    offenceStatus.Title = "Defeated";
  }

  if (defence_status_HP > 0) {
    defenceStatus.Title = "Survived";
  } else {
    defenceStatus.Title = "Defeated";
    defenceStatus.Survived = false;
  }

  return (
    <div>
      <div className="card w-10/12 bg-base-100 shadow-xl py-10 mx-auto my-4">
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {" "}
            <img
              className="small-image-size"
              src="/misc-images/BigSwords.png"
            />
            Fight Results{" "}
            <img
              className="small-image-size"
              src="/misc-images/BigSwords.png"
            />
          </h2>
        </div>

        <div className="grid grid-cols-9 gap-1 items-center">
          <div>Offense</div>
          <div>({offence_status_HP})</div>
          <div className="gap-0 justify-self-end damageTaken">
            (-{defenceResult})
          </div>
          <div>
            <img
              src={imageAttacker}
              width={50}
              height={50}
              className="rounded-xl"
            />{" "}
          </div>
          <div>
            Attack:{props.selectedUnitAttackerData.attack}{" "}
            <span
              className={`hide-text ${
                props.selectedUnitAttackerData.isBoosted ? "show-text" : ""
              }`}
            >
              ({boostedDamageToUse})
            </span>{" "}
          </div>
          <div>Defense: {props.selectedUnitAttackerData.defence}</div>
          <div>
            Original HP {props.selectedUnitAttackerData.inputHealth} (max:
            {attackerMaxHPToUse}){" "}
            <span style={{ color: "green" }}>
              {props.selectedUnitAttackerData.isVeteran
                ? ` +${veteranBuff}`
                : ""}{" "}
            </span>
          </div>
          <div>
            Status:
            <span
              className={`show-text ${
                offenceStatus.Title === "Defeated" ? "show-text-red" : ""
              }`}
            >
              {" "}
              {offenceStatus.Title}
            </span>
          </div>
          <div
            className={` small-image-size ${
              offenceStatus.Survived ? "hide-image" : ""
            }`}
          >
            <img src="/misc-images/Vengir_Skull.png" />
          </div>
          <div>Defense</div>
          <div>({defence_status_HP})</div>
          <div className="gap-0 justify-self-end damageTaken">
            (-{attackResult})
          </div>
          <div> {<img src={imageDefender} width={50} />}</div>
          <div>Attack:{props.selectedUnitDefenderData.attack}</div>
          <div>
            Defense: {props.selectedUnitDefenderData.defence}
            <span
              className={`hide-text ${
                props.selectedUnitDefenderData.defence_Bonus
                  ? "show-text"
                  : props.selectedUnitDefenderData.isCityWall
                  ? "show-text"
                  : ""
              }`}
            >
              {" "}
              (* {defenseBonus})
            </span>
            <span
              className={`hide-text ${
                props.selectedUnitDefenderData.isPoisoned ? "show-text-red" : ""
              }`}
            >
              {" "}
              ({props.selectedUnitDefenderData.default_Bonus})
            </span>
          </div>
          <div>
            Original HP {props.selectedUnitDefenderData.inputHealth} (max:
            {defenderMaxHPToUse}){" "}
            <span style={{ color: "green" }}>
              {props.selectedUnitDefenderData.isVeteran
                ? ` +${veteranBuff}`
                : ""}{" "}
            </span>{" "}
          </div>
          <div>
            Status:
            <span
              className={`show-text ${
                defenceStatus.Title === "Defeated" ? "show-text-red" : ""
              }`}
            >
              {" "}
              {defenceStatus.Title}
            </span>
          </div>
          <div
            className={` small-image-size ${
              defenceStatus.Survived ? "hide-image" : ""
            }`}
          >
            <img
              className="small-image-size"
              src="/misc-images/Vengir_Skull.png"
            />
          </div>
        </div>
      </div>

      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => resetButton()}>
          Reset Battle
        </button>
        <button className="btn btn-primary">Save Battle Results</button>
      </div>
    </div>
  );
}
// className={`hide-text ${props.selectedUnitAttackerData.isBoosted ? 'show-text' : ''}`};
