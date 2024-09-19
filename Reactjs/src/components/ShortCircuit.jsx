import { useState } from "react";
import "./Hooks.css";

const ShortCircuitExample =()=>{

      const[isLoggedIn,setIsLoggedIn] = useState(true);
      const [Users,setUsers]=useState("");
      return(
            <section className="container short-container"> 
            <h1> welcome to the shortCirciut evelution</h1>
{/* conditinaol operators */}
            { isLoggedIn && <p> You are logged in!</p>}

            {Users ? `hello $(Users)` : "You are logged in!"}
            <div className="grid-three-cols">
                  <button onClick={()=> setIsLoggedIn(!isLoggedIn)}> toggle login state</button>
                  <button onClick={()=> setUsers("chetan")}>Set Users</button>
                  <button onClick={()=> setUsers("")}>Clear Users</button>
            </div>
            </section>
      );
};

export default ShortCircuitExample;