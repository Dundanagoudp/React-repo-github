
import "./Hooks1.css";
import { useState } from "react";

export const Counter = () => {
      const [Count,setCount] = useState(0);
      console.log(useState())

      const handleIncrement=()=>{
            setCount(Count + 1);
            console.log("inner",Count);
      }
      console.log("outer",Count);

  return (
    <div className="container state-container" style={{ textAlign: "center" }}>
      <h1>use state Hooks!</h1>
      <p> {Count}</p>
      <button className="state-button" onClick={handleIncrement}>Increment</button>
    </div>
  );
};
