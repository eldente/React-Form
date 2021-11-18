import React, { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  function submitHandler(event) {
    event.preventDefault();
    Login(details);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-body">
        <h1>Login</h1>
        {error != "" ? <div className="error">{error}</div> : ""}

        <div className="form-group">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input className="login-button" type="submit" value="LOGIN"></input>
      </div>
    </form>
  );
}

export default LoginForm;
