import React from "react";
import { Link } from "react-router-dom";

function Questionnaire() {
  return (
    <div>
      <h1>Question 1</h1>
      <input className="next-page" type="submit" value="NEXT PAGE" />
      <Link to="/login"></Link>
    </div>
  );
}

export default Questionnaire;
