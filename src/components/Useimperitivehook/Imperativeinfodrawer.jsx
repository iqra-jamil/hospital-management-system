import React from 'react';
import { Drawer } from 'antd';
import MyButton from "../MyButton";

const Imperativeinfodrawer = ({ isdctrinfoDrawerOpen, setisdctrinfoDrawerOpen, selectedDctrRow, formRef }) => {
  //close drawer
    const onClose = () => {
    setisdctrinfoDrawerOpen(false);
  };

  const handleImport = () => {
    if (selectedDctrRow && formRef.current) {
      formRef.current.setFormData(selectedDctrRow);
      setisdctrinfoDrawerOpen(false);
    }
  };

  return (
    <Drawer
      title="Doctors Data"
      closable
      onClose={onClose}
      open={isdctrinfoDrawerOpen}
    >
      <p>Doctor Id : {selectedDctrRow?.DocId}</p>
      <p>Doctor Name: {selectedDctrRow?.DoctorName}</p>
      <div className='topBtn'>
        <MyButton title="Import Doctor Data" onClickHandler={handleImport} />
      </div>
    </Drawer>
  );
};

export default Imperativeinfodrawer;
