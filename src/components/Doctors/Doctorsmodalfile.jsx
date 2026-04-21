import React from 'react'
import { Drawer } from 'antd';

const Doctorsmodalfile = ({ isdctrinfoDrawerOpen, setisdctrinfoDrawerOpen, selectedDctrRow }) => {
  const onClose = () => {
    setisdctrinfoDrawerOpen(false);
  };
  return (
    <>
      <Drawer
        title="Doctors Data"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={isdctrinfoDrawerOpen}
      >
        <p>Doctor Id : {selectedDctrRow && selectedDctrRow.DocId}</p>
        <p>Doctor Name: {selectedDctrRow && selectedDctrRow.DoctorName}</p>
     
      </Drawer>
    </>
  )
}

export default Doctorsmodalfile
