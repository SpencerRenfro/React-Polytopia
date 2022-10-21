import { input } from "@material-tailwind/react";
import { useState } from "react";




export default function Modal(props) {

  // function testFunction(event){
  //   console.log(event.target.value);
  // }




  

  var charDataArray = [];
 
    for(const characterName in props.charData){
      const character = props.charData[characterName];
      charDataArray.push(character);
    }

    const [currentSelectedChar, setCurrentSelectedChar] = useState('Warrior'); 
  




  return (
    <div>
      <input
        type="checkbox"
        checked={props.modalPopup}
        id="my-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <div className="modal-action sticky top-0">
  
            <button
              className="btn btn-primary"
              onClick={() => props.updateModalSelection(props.charData[currentSelectedChar])}

            >
              Close
            </button>
            {/* <label htmlFor="my-modal" className="btn modal-button">open modal</label> */}
          </div>
          <ul className="overflow-y-scroll">
              {charDataArray.map(function (item) {
                let imageSource = `${process.env.PUBLIC_URL}/Defender-images/${item.imageSource}`;
                if (props.isModalAttacker) {
                  imageSource = `${process.env.PUBLIC_URL}/Attacker-images/${item.imageSource}`;
                }
                  {/*  className="flex flex-row justify-between justify-items-center */}
               
                return (

                  <li key={item.objectID} className="flex flex-row justify-items-center h-36 grid grid-cols-3 gap-1 content-around">
                    <span >{item.name}</span>
                    <span >
                      <img src={imageSource} width={50} />
                    
               
                    </span>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                          <input
                            value={item.name.toLowerCase()}
                            onClick={(event) => {
                              setCurrentSelectedChar(event.target.value)
                            }}
                            type="radio"
                            name="radio-6"
                            className={`radio checked:bg-red-500 ${!props.isModalAttacker ? 'radio checked:bg-blue-500' : ''}`}
                          />
                        </label>
                      </div>
                  </li>
                );
              })}
            </ul>
        </div>
      </div>
    </div>
  );
}



   