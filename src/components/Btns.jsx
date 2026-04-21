import React from "react";
import { NavLink } from "react-router-dom";

const Btns = () => {
  return (
    <div className="btnsContainer">
      <div className="btns">
        <NavLink to="/Signup" className="signup">
          {" "}
          Signup{" "}
        </NavLink>
        <NavLink to="/Login" className="login">
          {" "}
          Login{" "}
        </NavLink>
     
      </div>
    
    </div>
  );
};

export default Btns;
