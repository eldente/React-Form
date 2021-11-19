import React from "react";
import { Link } from "react-router-dom";

function Answers() {
  return (
    <div>
      <h1>Answers</h1>
      <input
        className="next-page"
        onClick={<Link to="/login" />}
        type="submit"
        value="NEXT PAGE"
      />
    </div>
  );
}

export default Answers;
