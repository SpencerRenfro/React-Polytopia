// import Modal from './Modal';
// import React, {useState} from 'react'


export default function UnitCard(props) {
  
  console.log(props.selectedUnitData, props.isAttacker, props.isBoosted, props.inputHealth, props.isVeteran);

  let imageSource = `${process.env.PUBLIC_URL}/Defender-images/${props.selectedUnitData.imageSource}`;
  if (props.isAttacker) {
    imageSource = `${process.env.PUBLIC_URL}/Attacker-images/${props.selectedUnitData.imageSource}`;
  }

  let cardTitle = "Defender";
  if (props.isAttacker) {
    cardTitle = "Attacker";
  }


  // show/hide defense bonuses

    // const [showDefenseBonuses, setShowDefenseBonuses] = useState(true);

  // function handleDefenseBonus(defenseBonusValue){
  //   this.setState({})
  // }

  function updateInput(event, valueName) {
    const newSelectedUnitData = {...props.selectedUnitData};
    if(valueName === "inputHealth"){
      
      newSelectedUnitData[valueName] = parseInt(event.target.value);
    }
   
    else{
      newSelectedUnitData[valueName] = event.target.checked;
    }

    console.log(event.target.value + "event-target-value");
    console.log(event.target.value.checked + "checkbox prop");

    props.updateData(props.isAttacker, newSelectedUnitData);

  }





  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="p-3">
        <h2 className="card-title">{cardTitle}</h2>
      </div>

      <figure className="px-10 pt-10">
        <img src={imageSource} width={150} className="rounded-xl" />
      </figure>

      <div className="card-body items-left text-center flex flex-col justify-between">
        <div className="unitcard-inputs">
          <input
            value={props.selectedUnitData.inputHealth}
            onChange={(event) => updateInput(event, 'inputHealth')}
            type="number"
            placeholder="Enter Input Health"
            className="input input-bordered input-primary w-full max-w-xs"
          />

          {/* 00000000 */}
  

          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Is veteran?(test checkbox)</span>
              <input
                type="checkbox"
                checked={props.isVeteran}
                onClick={(event) => updateInput(event, 'isVeteran')}
                className="checkbox checkbox-primary"
              />
            </label>
          </div>
          {props.isAttacker && (
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Is it boosted?</span>
                <input
                  type="checkbox"
                  checked={props.isBoosted}
                  onClick={(event) => updateInput(event, 'isBoosted')}
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
          )}
          

          
          {!props.isAttacker && (
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Is it poisioned?</span>
                <input
                  type="checkbox"
                  // checked={props.isPoisoned}
                  onClick={(event) => {
                    updateInput(event, 'isPoisoned')
                  }}
                
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
          )}
          {!props.isAttacker &&(
          
            <div>
          
              <div className="form-control">
            <label className="label cursor-pointer"> 
            <span className="label-text">Defense Bonus?</span>
                <input
                  type="checkbox"
                  checked={props.defence_Bonus}
                  onClick={(event) => updateInput(event, 'defence_Bonus')
                  }
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
           
            </div>
            
          )}
          {!props.isAttacker && (
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">City wall?</span>
                <input
                  type="checkbox"
                  checked={props.cityWall}
                  onClick={(event) => updateInput(event, 'isCityWall')}
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
          )}
            
        </div>
        <div className="unitcard-button">
          <div className="card-actions">
            <button className="btn btn-primary modal-button" onClick={() => props.triggerModal(props.isAttacker)}>Select Unit</button> 
             {/* <label htmlFor="my-modal" className="btn modal-button" onClick={() => props.triggerModal(props.isAttacker)}>open modal</label>   */}
             
          </div>
        </div>
      </div>
    </div>
  );
}
