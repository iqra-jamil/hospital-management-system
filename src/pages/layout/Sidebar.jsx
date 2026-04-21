import React from "react";
import Logout from "../../components/Logout";
import {
  LoginOutlined, BorderInnerOutlined, MedicineBoxOutlined, WomanOutlined,
  MacCommandOutlined, AlipayCircleOutlined, HeartOutlined, PaperClipOutlined, UnorderedListOutlined, CommentOutlined
} from "@ant-design/icons";
import logo from '../../components/logo.png';
import { NavLink } from "react-router-dom";
const Sidebar = ({ setisLoggedin }) => {
  return (

    <div className="listedItemsCont">
      <div className="upperleftContainer">
        <img src={logo} className="dashboardlogo" />
        <div className="headings">
          <h1 className="dbenglishheading">
            Shifa international Hospitals Ltd.
          </h1>
          <h1 className="dburduheading">شفا انٹرنیشنل ہسپتال لمیٹڈ</h1>
        </div>
      </div>
      <div className="listedItems">
        <NavLink to="/PatientsNew" className="Item"> <CommentOutlined style={{ padding: 5 }} /> Patients List</NavLink>
        <NavLink to="/UsersNew" className="Item"> <UnorderedListOutlined style={{ padding: 5 }} />Users List</NavLink>
        <NavLink to="/DoctorsNew" className="Item"> <UnorderedListOutlined style={{ padding: 5 }} />Doctors List</NavLink>
        <NavLink to="/Appointmentlist" className="Item"> <PaperClipOutlined style={{ padding: 5 }} /> Appointment List</NavLink>
       <NavLink to="/Useimperativehook" className="Item"> <PaperClipOutlined style={{ padding: 5 }} />Useimperativehook</NavLink>
        <NavLink to="/TraigeIn" className="Item"> <PaperClipOutlined style={{ padding: 5 }} /> traige In</NavLink>
        <NavLink to="/Vitals" className="Item"> <HeartOutlined style={{ padding: 5 }} /> Vitals</NavLink>
        <NavLink to="/Allergies" className="Item"> <AlipayCircleOutlined style={{ padding: 5 }} /> Allergies</NavLink>
        <NavLink to="/DoctorNotes" className="Item"> <MacCommandOutlined style={{ padding: 5 }} /> Doctor Notes</NavLink>
        <NavLink to="/Nursing" className="Item"> <WomanOutlined style={{ padding: 5 }} /> Nursing</NavLink>
        <NavLink to="/Madication" className="Item"> <MedicineBoxOutlined style={{ padding: 5 }} /> Madication</NavLink>
        <NavLink to="/Neuroligy" className="Item"> <BorderInnerOutlined style={{ padding: 5 }} /> Neuroligy</NavLink>
        {/* <NavLink to ="/Patientlist" className="Item"> <LoginOutlined style={{padding:5}}/> Logout</NavLink> */}
        <div className="Item">
          <Logout setisLoggedin={setisLoggedin} color="black" noBorder />

        </div>
      </div>

    </div>

  );
};

export default Sidebar;
// style={{padding:5}}
