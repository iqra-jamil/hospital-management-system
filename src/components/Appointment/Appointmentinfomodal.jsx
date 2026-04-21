import React from 'react'
import { Drawer } from 'antd';
const Appointmentinfomodal = ({ isAptinfoDrawerOpen, setisAptinfoDraweOpen, selectedAppointment }) => {
const onClose = () => {
   setisAptinfoDraweOpen(false);
  };
  return (
    <>
      <Drawer
        title="Appointments"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={isAptinfoDrawerOpen}
      >
        <p>MR NO : {selectedAppointment && selectedAppointment.MRNo}</p>
        <p>patinent name: {selectedAppointment && selectedAppointment.PatientName}</p>
        <p>Doctor Id : {selectedAppointment && selectedAppointment.DocId}</p>
        <p>Doctor Name: {selectedAppointment && selectedAppointment.DoctorName}</p>
        <p>email adress : {selectedAppointment && selectedAppointment.emailadress}</p>
        <p>phone number : {selectedAppointment && selectedAppointment.phonenumber}</p>
         
      </Drawer>
    </>
  )
}

export default Appointmentinfomodal
