import React, { useState } from "react";
import LoginForm from "./LoginForm";
import "./../styles/App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Do not remove the main div */}
      {isLoggedIn ? (
        <h1>Parent Component</h1>
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
