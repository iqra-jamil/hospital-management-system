import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import PatientdataForm from "../components/PatientdataForm.jsx"
import {
PicCenterOutlined
} from "@ant-design/icons";
import Logout from './Logout';
const Mobileheader = ({setisLoggedin}) => {
    const [toggleState,settoggleState]=useState(false)
    function toggleheaderItems(){
            settoggleState(!toggleState);
            //if value of !toggleState is = false set it to true and if its = true set to false
    }
  return (
    <div className='mobileheader'>
    <div className="toggleicon" >
    <Logout setisLoggedin={setisLoggedin}/>
    {/* <PatientdataForm/> */}
    <PicCenterOutlined onClick={toggleheaderItems} />  
        
    </div>
   
      <div className='mobileheaderItems' style={{display : toggleState===false ? "none" : "flex"}}> 
        <NavLink to="/About" className={({ isActive }) => isActive ? "headerItemactive" : "headerItem"}>
          About us 
        </NavLink>
           <NavLink to="/Services" className={({ isActive }) => isActive ? "headerItemactive" : "headerItem"}>
          Services
        </NavLink>
        <NavLink to="/Contact" className={({ isActive }) => isActive ? "headerItemactive" : "headerItem"}>
          Contact us
        </NavLink>

      </div>
    </div>
  )
}

export default Mobileheader


