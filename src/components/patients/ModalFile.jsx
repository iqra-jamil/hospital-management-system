import React, { useState } from 'react';
import { Drawer } from 'antd';
import MyButton from '../MyButton';
const App = ({ setispatientinfoDrawerOpen, ispatientinfoDrawerOpen, selectedPatient }) => {

  const onClose = () => {
    setispatientinfoDrawerOpen(false);
  };
  return (
    <>
      <Drawer
        title="patient Data"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={ispatientinfoDrawerOpen}
      >
        <p>TokenPriority : {selectedPatient && selectedPatient.TokenPriority}</p>
        <p>PatientName: {selectedPatient && selectedPatient.PatientName}</p>
        <p> MRNo : {selectedPatient && selectedPatient.MRNo}</p>
        <p> Bill : {selectedPatient && selectedPatient.Bill}</p>
        
      </Drawer>
    </>
  );
};
export default App;




