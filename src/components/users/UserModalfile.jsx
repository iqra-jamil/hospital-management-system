import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

const App = ({ setinfoIsdrawerOpen, isinfodrawerOpen, useParamSelcteduser }) => {
  const onClose = () => {
    setinfoIsdrawerOpen(false);
  };
  return (
    <>
      <Drawer
        title="User Data"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={isinfodrawerOpen}
      >
        <p>empID : {useParamSelcteduser && useParamSelcteduser.empID}</p>
        <p>password : {useParamSelcteduser && useParamSelcteduser.password}</p>
        <p>Firstname : {useParamSelcteduser && useParamSelcteduser.Firstname}</p>
        <p>last name : {useParamSelcteduser && useParamSelcteduser.fatherhusbandname}</p>
        <p>Gender: {useParamSelcteduser && useParamSelcteduser.Gender}</p>
        <p>DOB: {useParamSelcteduser && useParamSelcteduser.DOB}</p>
        <p>age: {useParamSelcteduser && useParamSelcteduser.age}</p>
        <p>City: {useParamSelcteduser && useParamSelcteduser.City}</p>
        <p> province : {useParamSelcteduser && useParamSelcteduser.province}</p>
        <p> isAdmin : {useParamSelcteduser && useParamSelcteduser.isAdmin ? 'Yes' : 'No'}</p>

      </Drawer>

    </>
  );
};
export default App;




