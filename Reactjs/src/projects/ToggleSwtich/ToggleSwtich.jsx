import { useState } from "react";
import "./ToggleSwtich.css"
import { IoIosSwitch } from "react-icons/io";
import { FaUserSecret } from "react-icons/fa";


export const ToggleSwtich=()=>{

      const [isOn, setIsOn] = useState(false);

      const handletoggleSwitch=()=>{
            setIsOn(!isOn); 
      }
const backg={backgroundColor:isOn ? "#4caf50" : "#f44336"};
      return (
            <>
            <h1 style={{color:"#000",textAlign:"center"}}>Toggle switch <IoIosSwitch style={{color:"#ff0000",textAlign:"center"}} /><FaUserSecret />

            </h1>
      <div className="toggle-switch" style={backg} onClick={handletoggleSwitch} >
            <div className={`switch ${isOn ? "on" : "off"}`}>
                  <span className="switch-state">{isOn ? "ON" : "OFF"}</span>
            </div>
      </div>
      </>
);
};
