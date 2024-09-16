import { useState } from "react";

// const users = [
//       { name:"akash", age:"23"},
//       { name:"mallu", age:"26"},
//       { name:"nitin", age:"28"},
//       { name:"rakesh", age:"30"},

// ]

export const DerivedState =()=>{


      // creating on hooks
      const [users,setUsers] = useState([
            { name:"akash", age:"23"},
      { name:"mallu", age:"26"},
      { name:"nitin", age:"28"},
      { name:"rakesh", age:"30"},
 
      ])
      console.log(users);
const userCount = users.length;

const averageAge = users.reduce((accum, curEle)=> accum + curEle.age,0)/userCount;
      return(
<div className="main-div">
<h1> users lists</h1>
<ul>
  {
      users.map((CurEle, index)=>{
            return<>
            <li key={index}>
                 {CurEle.name}-{CurEle.age} years old 
            </li>
            </>
      }
)
  }
 
</ul>
<p>Total users:{userCount}</p>
<p>total average:{averageAge}</p>
</div>
      );
};