export default function Results(props) {

   let imageAttacker = `${process.env.PUBLIC_URL}/Attacker-images/${props.selectedUnitAttackerData.imageSource}`;
   let imageDefender = `${process.env.PUBLIC_URL}/Defender-images/${props.selectedUnitDefenderData.imageSource}`; 

   var attackForce = props.selectedUnitAttackerData.attack * (props.selectedUnitAttackerData.inputHealth / props.selectedUnitAttackerData.maxHealth);
   var defenceForce = (props.selectedUnitDefenderData.defence * (props.selectedUnitDefenderData.inputHealth / props.selectedUnitDefenderData.maxHealth)) * props.selectedUnitDefenderData.defence_Bonus;
   var totalDamage = attackForce + defenceForce;

   var attackResult = Math.round(attackForce / totalDamage * props.selectedUnitAttackerData.attack * 4.5);
   var defenceResult = Math.round(defenceForce / totalDamage * props.selectedUnitDefenderData.defence * 4.5);

   var offence_status_HP = props.selectedUnitAttackerData.inputHealth - defenceResult;
   var defence_status_HP = props.selectedUnitDefenderData.inputHealth - attackResult;

   var offenceStatus;
   var defenceStatus;

   if(offence_status_HP > 0){
    offenceStatus = 'Survived';
  }
  else{
    offenceStatus = 'Defeated';
  }
  if(defence_status_HP > 0){
    defenceStatus = 'Survived';
  }
  else{
    defenceStatus = 'Defeated';
  } 

 

 


    return  (
        <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <img src="/misc-images/SmallSwords.png" />
        <th>Fight Results</th>
        <img src="/misc-images/SmallSwords.png"/>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <td>Offence</td>
        {<img src={imageAttacker} width={50} alt="Shoes" className="rounded-xl" /> }
        <td>Attack:{props.selectedUnitAttackerData.attack}</td>
        <td>Defense:{props.selectedUnitAttackerData.defence}</td>
        <td>Original HP {props.selectedUnitAttackerData.inputHealth} </td>
        <td>New HP {defenceResult}</td>
        <td>Status:{offenceStatus}</td>
   
      </tr>
      {/* <!-- row 2 --> */}
      <tr>
        <td>Defense</td>
        {<img src={imageDefender} width={50}  />} 
        <td>Attack:{props.selectedUnitDefenderData.attack}</td>
        <td>Defense: {props.selectedUnitDefenderData.defence}</td>
        <td>Original HP {props.selectedUnitDefenderData.inputHealth}</td>
        <td>New HP {attackResult}</td>
        <td>Status:{defenceStatus} </td>
      </tr>
      {/* <!-- row 3 --> */}
      <tr>
        <th>  </th>
        <td> </td>
        <td> </td>
        <td> </td>
      </tr>
    </tbody>
  </table>
</div>
    );
}