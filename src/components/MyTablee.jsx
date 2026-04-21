import React, { useState, useEffect } from 'react';
import { Space, Table, Input, Button } from 'antd';
import { Icon } from '@iconify/react';
// import ModalFile from "./ModalFile.jsx";
import useTableLogic from '../utils/functions.js';
const MyTable = ({ patientNames, setpatientDatastate }) => {

  const {
    dataSource, trackEditingRow, tempEditingData, selectedPatient, setselectedPatient,
    handleEdit, handleSave, handleCancel, handleDelete, trackInputchanges, handleInfo
  } = useTableLogic(patientNames, setpatientDatastate, 'patient');


  const columns = [
    {
      title: 'Token Priority',
      dataIndex: 'token_priority',
      key: 'token_priority',
      onCell: () => ({ 'data-label': 'Token Priority' }),
      render: (text, record) =>
        record.key === trackEditingRow ? (
          <Input value={tempEditingData.token_priority} onChange={(e) => trackInputchanges(e, 'token_priority')} />
        ) : text
    },
    {
      title: 'Patient Name',
      dataIndex: 'patient_name',
      key: 'patient_name',
      onCell: () => ({ 'data-label': 'Patient Name' }),
      render: (text, record) =>
        record.key === trackEditingRow ? (
          <Input value={tempEditingData.patient_name} onChange={(e) => trackInputchanges(e, 'patient_name')} />
        ) : text
    },
    {
      title: 'MR No',
      dataIndex: 'mr_no',
      key: 'mr_no',
      onCell: () => ({ 'data-label': 'MR No' })
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      onCell: () => ({ 'data-label': 'Age' }),
      render: (text, record) =>
        record.key === trackEditingRow ? (
          <Input value={tempEditingData.age} onChange={(e) => trackInputchanges(e, 'age')} />
        ) : text
    },
    {
      title: 'Father Name',
      dataIndex: 'father_name',
      key: 'father_name',
      onCell: () => ({ 'data-label': 'Father Name' }),
      render: (text, record) =>
        record.key === trackEditingRow ? (
          <Input value={tempEditingData.father_name} onChange={(e) => trackInputchanges(e, 'father_name')} />
        ) : text
    },
    {
      title: 'DOB',
      dataIndex: 'dob',
      key: 'dob',
      onCell: () => ({ 'data-label': 'DOB' }),
      render: (text, record) =>
        record.key === trackEditingRow ? (
          <Input value={tempEditingData.dob} onChange={(e) => trackInputchanges(e, 'dob')} />
        ) : text
    },
    {
      title: 'Total Bill',
      dataIndex: 'total',
      key: 'total',
      onCell: () => ({ 'data-label': 'Total Bill' }),
      render: (text, record) =>
        record.key === trackEditingRow ? (
          <Input value={tempEditingData.total} onChange={(e) => trackInputchanges(e, 'total')} />
        ) : text
    },
    {
      title: 'Action',
      key: 'action',
      onCell: () => ({ 'data-label': 'Action' }),
      render: (_, record) =>
        record.key === trackEditingRow ? (
          <Space size="middle">
            <Button type="primary" onClick={() => handleSave('user')}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </Space>
        ) : (
          <Space size="middle">
            <a onClick={() => handleEdit(record, 'patient')}><Icon icon="line-md:edit-twotone" width="24" height="24" /></a>
            <a onClick={() => handleDelete(record.key, 'patient')}><Icon icon="line-md:trash" width="24" height="24" /></a>
            <ModalFile setselectedPatient={setselectedPatient} selectedPatient={selectedPatient} handleInfo={handleInfo} record={record} />
          </Space>
        )
    }
  ];

  return (
    <div className="tableContainer">

      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ position: ['bottomCenter'] }}
      />
    </div>
  );
};

export default MyTable;






























