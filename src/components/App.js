import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For test, no actual validation is needed
    setIsLoggedIn(true);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      {isLoggedIn ? (
      <h1>Parent Component</h1>  // instead of Lift State Up Demo

      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default App;
