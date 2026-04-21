import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Mobileheader from '../../components/Mobileheader'

const Applayout = ({setisLoggedin,patientDatastate,setpatientDatastate,userDatastate,setuserDatastate}) => {
  const navigate = useNavigate()
   let token=JSON.parse(localStorage.getItem("acessToken"));
   useEffect(()=>{
     if(token === false) navigate('/')
   },[token])

  return (

    <>
      <div className="ContainerTwo">
        <Mobileheader setisLoggedin={setisLoggedin} />
        <Sidebar setisLoggedin={setisLoggedin}/>
        <div className="flexColumn">
          <div className="deskTopheader">
            <Header userDatastate={userDatastate} setuserDatastate={setuserDatastate} patientDatastate={patientDatastate} setpatientDatastate={setpatientDatastate} setisLoggedin={setisLoggedin}/>     
          </div>
          <div className="dashBoardContainer">
            <Outlet/>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>

    </>
  )
}

export default Applayout
