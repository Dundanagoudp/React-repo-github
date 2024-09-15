import { useState } from "react";


export const State =()=>{

      // let value=0;

      // const handleButtonClick =()=>{
      //       value++;
      //       console.log(value);
      // }

      const [count ,setCount] = useState(0);
      console.log("parent componet is rendered");

      const handleButtonClick =()=>{
            setCount(()=> count + 1 );
      }
      // console.log(Array());
      return(
<>
<div className="main-div">
<h1>{count}</h1>
<button onClick={handleButtonClick}>Increment</button>
</div>
<ChildComponet/>
</>
      );
};

function ChildComponet(){
console.log("child componet is rendered");
return <div className="main-div">
      <h1>ChildComponet</h1>
      </div>
}