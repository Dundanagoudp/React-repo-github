
import { useState } from "react";
import "./Hooks1.css";

export const ControlledForm =()=>{
      const[name,setname]= useState("");

      const handleChange =(event)=>{
            setname(event.target.value);
      }

const handleSubmit=(event)=>{
      event.preventDefault();
      // const datavalue = document.querySelector("#inputname").value;
      // console.log(datavalue);

      console.log(name);
};

      return(
            <section className="container state-container">
                  <h1>Controlled componets</h1>

                  <form onSubmit={handleSubmit}>
                        <label>name: <input  id ="inputName" name= "name" type="text" value={name} onChange={handleChange} />
                        </label>
                        <br />
                        <button type="submit" className="state-button" >Submit</button>
                  </form>
            </section>
      );
};
export default ControlledForm;