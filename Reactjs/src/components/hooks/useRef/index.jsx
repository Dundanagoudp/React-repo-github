import { useRef } from "react";
import "./index.css";

export const UseRef=()=>{

// const username = console.log(document.getElementById("username"));
//   const password = console.log(document.getElementById("password"));

const username = useRef(null);
  const password = useRef(null);

      const handleFormSubmit=(e)=>{
            e.preventDefault();
            console.log(username.current.value, passwordRef.current.value);      }

      return (
      <form  onSubmit={handleFormSubmit}>
      <input type="text" id="username" ref={username} />
      <br/>
      <input type="text"  id="password" ref={password}/>
      <br/>
      <button>submit</button>
      </form>
      );
};