import { useEffect, useState } from "react";
import "./index.css";

export const Challenge=()=>{
      const[name,setName] = useState("chetan");
      const[count,setCount] = useState(0);
      
      useEffect(()=>{
            // console.log(name);
            document.title = `count : ${count}`
      },[count])

      return(
            <div className="container effect-container">
                  <h1>useEffect Challenege</h1>
                  <p>
                        count : <span>{count}</span>
                  </p>
                  <button onClick={()=> setCount(count + 1)}>Increment</button>
                  <p>
                        name: <span>{name}</span>
                  </p>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
      );
};