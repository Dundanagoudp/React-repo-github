
import { useEffect } from "react";
import "./index.css"
import { useState } from "react";

export const ReactUseEffect=()=>{
      // const[count,setCount] = useState(0);

      // useEffect(()=>{
      //       console.log("const value",count)
      // },[count]);

      const[date,setDate] = useState(0);

      useEffect(()=>{
            setInterval(()=>{
                  const updatedDate = new Date();
                  setDate(updatedDate.toLocaleTimeString())
                        },[date]);     
            },1000)

      return(

            <div className="container effect-container">
            <h1>Date :{date}</h1>
            {/* <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button> */}
          </div>
          
      );
};