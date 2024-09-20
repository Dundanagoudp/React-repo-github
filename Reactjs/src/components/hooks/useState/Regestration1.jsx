import { useState } from "react";
import "./index.css";


export const RegistrationForm= ()=>{

      const [firstName, setFirstName] = useState("");
      const [lastName, setlastName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");


      const handleInputChange = (e) => {
            const { name, value } = e.target;
        
            switch (name) {
              case "firstName":
                setFirstName(value);
                break;
        
              case "lastName":
                setLastName(value);
                break;
        
              case "email":
                setEmail(value);
                break;
        
              case "password":
                setPassword(value);
                break;
        
              case "phone":
                setPhoneNumber(value);
                break;
            }

      };

      const handleFormSubmit=(event)=>{
            const formData = {
                  firstName,
                  lastName,
                  email,
                  password,
                  phoneNumber,
                };
            
                console.log(formData);
              };

      return(
            <form onClick={handleFormSubmit}>
                  <div className="container" >
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <label htmlFor="firstName">
                              <b>first name</b>
                        </label>
                        <input 
                        type="text"
                        name="firstName"
                        placeholder="Enter firstName"
                        required
                        value={firstName}
                        onChange={handleInputChange} 
                        />
                        <label htmlFor="lastName">
                              <b>first name</b>
                        </label>
                        <input 
                        type="text"
                        name="lastName"
                        placeholder="Enter lastName"
                        required
                        value={lastName}
                        onChange={handleInputChange} 
                        />

                      <label htmlFor="lastname">
                              <b>last name</b>
                        </label>
                        <input 
                        type="text"
                        name="email"
                        placeholder="Enter enail"
                        required
                        value={email}
                        onChange={handleInputChange} 
                        />

<label htmlFor="password">
                              <b>password</b>
                        </label>
                        <input 
                        type="text"
                        name="password"
                        placeholder="Enter password"
                        required
                        value={password}
                        onChange={handleInputChange} 
                        />

<label htmlFor="phone">
                              <b>phone</b>
                        </label>
                        <input 
                        type="phone"
                        name="phone"
                        placeholder="8830525852"
                        required
                        value={phoneNumber}
                        onChange={handleInputChange} 
                        />

<p>
            By creating an account you agree to our
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>

          <p>
          By creating an account you agree to our 
          <a href="#" style={{color:"dodgerblue"}}>
            Terms and Privacy
          </a>
          </p>

                  </div>
            </form>
      );
};

export default RegistrationForm;