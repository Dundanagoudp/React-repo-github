import { useState } from "react";
import "./index.css";

export const ContactForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State to handle the message

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      username,
      password,
      message,
    };

    // Checking if the username and password are not empty (basic validation)
    if (username && password) {
      console.log(loginData);
      setMessage("Login successful!"); // Display success message
    } else {
      setMessage("Please fill in both fields."); // Display error message
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>LoginForm</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="message">message</label>
          <input
            type="text"
            name="message"
            required
            autoComplete="off"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
         

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
