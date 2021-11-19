import React, { useState, createContext } from "react";
import LoginForm from "./components/LoginForm";
import Questionnaire from "./components/Questionnaire";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Link,
  useHistory,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Answers from "./components/Answers";

const ContextProvider = createContext();

function App() {
  const history = useHistory();
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  function isLoggedIn() {
    if (user) {
      return true;
    } else return false;
  }

  function Login(details) {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
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
    <Redirect to="/login" />;
  }

  function PrivateRoute({ exact, component: Component, path, ...rest }) {
    function renderPage() {
      if (isLoggedIn) {
        return <Component />;
      } else {
        <Redirect to="/login" />;
      }
    }

    return <Route rest={{ ...rest }} render={renderPage} />;
  }

  function PublicRoute({ exact, component: Component, path }) {
    function renderPage() {
      if (isLoggedIn) {
        return <Redirect to="/" />;
      } else {
        return <Component />;
      }
    }

    return <Route exact={exact} path={path} render={renderPage} />;
  }

  return (
    <ContextProvider.Provider value={{ user, setUser }}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <PrivateRoute
              exact
              path="/"
              component={Dashboard}
              Logout={Logout}
            />
            <PrivateRoute exact path="/quest" component={Questionnaire} />
            <PrivateRoute exact path="/answers" component={Answers} />
            <PublicRoute exact path="/login" component={LoginForm} />
          </Switch>
        </BrowserRouter>
      </div>
    </ContextProvider.Provider>
  );
}

export default App;

// {user.email != "" ? (
//   <Dashboard Logout={Logout} />
// ) : (
//   <LoginForm Login={Login} error={error} />
// )}
