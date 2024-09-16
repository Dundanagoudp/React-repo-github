import { useState } from "react";
import "./ToggleSwtich.css"

export const ToggleSwtich=()=>{

      const [isOn, setIsOn] = useState(false);

      const handletoggleSwitch=()=>{
            setIsOn(!isOn); 
      }
const backg={backgroundColor:isOn ? "#4caf50" : "#f44336"};
      return (
      <div className="toggle-switch" style={backg} onClick={handletoggleSwitch} >
            <div className={`switch ${isOn ? "on" : "off"}`}>
                  <span className="switch-state">{isOn ? "ON" : "OFF"}</span>
            </div>
      </div>
);
};
