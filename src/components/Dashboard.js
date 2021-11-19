import React, { useContext } from "react";
import { Link } from "react-router-dom";

function Dashboard({ Logout }) {
  //   const { user } = useContext(ContextProvider);
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <input
        onClick={Logout}
        className="logout-button"
        type="submit"
        value="LOGOUT"
      ></input>
    </div>
  );
}

export default Dashboard;
