
import React, { useState, useEffect } from 'react';
import { Space, Table, Input, Button } from 'antd';
import { Icon } from '@iconify/react';
//import UserModalfile from './UserModalfile.jsx';
 import useTableLogic from '../utils/functions.js';
const  Usertable = ({UserNames, setuserDatastate }) => { 
  let userdata=JSON.parse(localStorage.getItem('userdata'))||[];
const { 
  userDataSource, trackEditingRow, tempEditingData,setselectedUser,selectedUser,
  handleEdit, handleSave, handleCancel, handleDelete, trackInputchanges, handleInfo
} = useTableLogic(UserNames,setuserDatastate);

  const columns = [
    {
      title: 'First name',
      dataIndex: 'Firstname',
      key: 'Firstname',
      onCell: () => ({ 'data-label': 'First name' }),
      render: (text, record) =>
        record.key === trackEditingRow ? (
          <Input value={tempEditingData.Firstname} onChange={(e) => trackInputchanges(e, 'Firstname')} />
        ) : text
    },
     {
      title: 'empID',
      dataIndex: 'empID',
      key: 'empID',
      onCell: () => ({ 'data-label': 'empID' }),
      render: (text, record) =>
        record.key === trackEditingRow ? (
          <Input value={tempEditingData.empID} onChange={(e) => trackInputchanges(e, 'empID')} />
        ) : text
    },
        {
      title: 'father name',
      dataIndex: 'fatherhusbandname',
      key: 'fatherhusbandname',
      onCell: () => ({ 'data-label': 'empID' }),
      render: (text, record) =>
        record.key === trackEditingRow ? (
          <Input value={tempEditingData.fatherhusbandname} onChange={(e) => trackInputchanges(e, 'fatherhusbandname')} />
        ) : text
    },
    {
      title: 'Gender',
      dataIndex: 'Gender',
      key: 'Gender',
      onCell: () => ({ 'data-label': 'Gender' }),
      render: (text, record) =>
        record.key === trackEditingRow ? (
          <Input value={tempEditingData.Gender} onChange={(e) => trackInputchanges(e, 'Gender')} />
        ) : text
    },
    {
      title: 'DOB',
      dataIndex: 'DOB',
      key: 'DOB',
      onCell: () => ({ 'data-label': 'DOB' }),
      render: (text, record) =>
        record.key === trackEditingRow ? (
          <Input type="date" value={tempEditingData.DOB} onChange={(e) => trackInputchanges(e, 'DOB')} />
        ) : text
    },
       {
      title: 'age',
      dataIndex: 'age',
      key: 'age',
      onCell: () => ({ 'data-label': 'age' }),
      render: (text, record) =>
        record.key === trackEditingRow ? (
          <Input value={tempEditingData.age} onChange={(e) => trackInputchanges(e, 'age')} />
        ) : text
    },
          {
      title: 'password',
      dataIndex: 'password',
      key: 'password',
      onCell: () => ({ 'data-label': 'password' }),
      render: (text, record) =>
        record.key === trackEditingRow ? (
          <Input value={tempEditingData.password} onChange={(e) => trackInputchanges(e, 'password')} />
        ) : text
    },
     {
      title: 'City',
      dataIndex: 'City',
      key: 'City',
      onCell: () => ({ 'data-label': 'City' }),
      render: (text, record) =>
        record.key === trackEditingRow ? (
          <Input value={tempEditingData.City} onChange={(e) => trackInputchanges(e, 'City')} />
        ) : text
    },
        {
      title: 'province',
      dataIndex: 'province',
      key: 'province',
      onCell: () => ({ 'data-label': 'province' }),
      render: (text, record) =>
        record.key === trackEditingRow ? (
          <Input value={tempEditingData.province} onChange={(e) => trackInputchanges(e, 'province')} />
        ) : text
    },
    {
      title: 'Action',
      key: 'action',
      onCell: () => ({ 'data-label': 'Action' }),
      render: (_, record) =>
        record.key === trackEditingRow ? (
          <Space size="middle">
            <Button type="primary" onClick={()=>handleSave('user')}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </Space>
        ) : (record.empID===userdata[0].empID)? null : (
          <Space size="middle">
              <a onClick={() => handleEdit(record, 'user')}><Icon icon="line-md:edit-twotone" width="24" height="24" /></a>
              <a onClick={() => handleDelete(record.key, 'user')}><Icon icon="line-md:trash" width="24" height="24" /></a>
              <UserModalfile setselectedUser={setselectedUser} selectedUser={selectedUser} handleInfo={handleInfo} record={record} />

          </Space>
        )
    }
  ];
 


  return (
    <div className="tableContainer">
    
   <Table
        columns={columns}  //table k headers
        dataSource={userDataSource} //table ke rows
        
        pagination={{ position: ['bottomCenter'] }}
      /> 
    </div>
  );
};

export default Usertable;

