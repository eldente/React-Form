import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState("");

  function Login(details) {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Wrong Login details");
      setError(
        "Your Login information does not match our records! Please try again."
      );
    }
  }

  function Logout() {
    console.log("Logout");
    setUser({
      name: "",
      email: "",
    });
  }

  return (
    <div className="App">
      {user.email != "" ? (
        <div className="welcome">
          <h1>Welcome {user.name}</h1>
          <input
            onClick={Logout}
            className="logout-button"
            type="submit"
            value="LOGOUT"
          ></input>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
