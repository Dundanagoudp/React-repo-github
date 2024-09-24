import { useState } from "react";
import "./index.css";

export const LoginForm=()=>{

      const handleFormSubmit =(e)=>{
            e.preventDefault();

            const loginData ={
                  username,
                  password,
            };
            console.log(loginData);
      };
      const[username,setusername]=useState("");
      const[password,setpassword]=useState("");
      return(
            <div className="container">
                  <div className="card">
                        <h1>LoginForm</h1>
                        <form onSubmit={handleFormSubmit}>
                              <label htmlFor="username">username</label>
                              <input
                               type="text"
                               name="username" 
                               required autoComplete="off"
                               value={username}
                               onChange={(e)=> setusername(e.target.value)}
                                />
                              <label htmlFor="password">password</label>
                              <input type="password" name="password" required autoComplete="off"
                              value={password}
                              onChange={(e)=> setpassword(e.target.value)}
                              />
                              <button type="submit">Login</button>
                        </form>
                  </div>
            </div>
      );
};