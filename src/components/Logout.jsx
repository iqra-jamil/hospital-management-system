import React from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setisLoggedin, color, noBorder }) => {
  let navigate = useNavigate();

  function logoutFunc() {
    // Remove session-related info
    localStorage.removeItem("acessToken");
    localStorage.removeItem("loggedInUser");

    // Remove all patient data if you want
    localStorage.removeItem("data");
    localStorage.removeItem("Appointment");
    localStorage.removeItem("doctordata");
  
    setisLoggedin(false);
    navigate('/');
  }

  return (
    <div>
      <button 
        className="Logoutbtn" 
        onClick={logoutFunc} 
        style={{ color: color || "white", border: noBorder ? "none" : undefined }}
      >
        <Icon icon="line-md:logout" width="24" height="15" />logout
      </button>
    </div>
  )
}

export default Logout


