import React, { useContext } from "react";
import AuthContext from "./AuthContext";

import "./Persons.css";

const Logout = props => {
  const auth = useContext(AuthContext);
  return (
    <button className="btn" onClick={auth.logout}>
      Logout
    </button>
  );
};

export default Logout;
