import React, { useState, useEffect } from 'react';

const useTableLogic = (dataList, setParentData) => {
  const [dataSource, setDataSource] = useState([]);
  const [userDataSource, setuserDataSource] = useState([]);
  const [trackEditingRow, settrackEditingRow] = useState(null);
  const [tempEditingData, settempEditingData] = useState({});
  const [selectedPatient, setselectedPatient] = useState({});
  const [selectedUser, setselectedUser] = useState({});

const handleInfo = (record, type) => {
  if(type === 'patient') setselectedPatient(record);
  if(type === 'user') setselectedUser(record);
};

const handleEdit = (record,type) => {
  settrackEditingRow(record.key);
  settempEditingData({ ...record });

  if(type === 'patient') {
    setDataSource((prev) =>
      prev.map((item) => (item.key === record.key ? { ...item } : item))
    );
  } else if(type === 'user') {
    setuserDataSource((prev) =>
      prev.map((item) => (item.key === record.key ? { ...item } : item))
    );
  }
};


  const trackInputchanges = (e, field) => {
    const value = e.target.value;
    settempEditingData((oldData) => ({ ...oldData, [field]: value }));
  };

 
const handleSave = (type) => {
  if(type === 'patient') {
    const updated = dataSource.map(item => item.key === trackEditingRow ? tempEditingData : item);
    setDataSource(updated);
    localStorage.setItem('data', JSON.stringify(updated));
    if(setParentData) setParentData(updated);
  } else if(type === 'user') {
    const updated = userDataSource.map(item => item.key === trackEditingRow ? tempEditingData : item);
    setuserDataSource(updated);
    localStorage.setItem('userdata', JSON.stringify(updated));
    if(setParentData) setParentData(updated);
  }
  settrackEditingRow(null);
  settempEditingData({});
};

  const handleCancel = () => {
    settrackEditingRow(null);
    settempEditingData({});
  };

  useEffect(() => {
    const updatedData = dataList.map((item, index) => ({
      key: item.key || index + Date.now(),
      ...item,
    }));
    setDataSource(updatedData);
  }, [dataList]);
useEffect(() => {
  const updatedData = dataList.map((item, index) => ({
    key: item.key || index + Date.now(),
    ...item,
  }));
  setuserDataSource(updatedData);
}, [dataList]);


  const handleDelete = (key,type) => {
  if (type === 'patient') {
    const updatedData = dataSource.filter(item => item.key !== key);
    setDataSource(updatedData);
   // localStorage.setItem('data', JSON.stringify(updatedData));
    // setpatientDatastate(updatedData);
  } else if (type === 'user') {
    const updatedUsers = userDataSource.filter(item => item.key !== key);
    setuserDataSource(updatedUsers);
    //localStorage.setItem('userdata', JSON.stringify(updatedUsers));
    //setuserDatastate(updatedUsers);
  }
};


  return {
    dataSource,
    userDataSource,
    trackEditingRow,
    tempEditingData,
    selectedPatient,
    selectedUser,
    setselectedPatient,
    setselectedUser,
    handleEdit,
    handleSave,
    handleCancel,
    handleDelete,
    trackInputchanges,
    handleInfo,
  };
};

export default useTableLogic;
