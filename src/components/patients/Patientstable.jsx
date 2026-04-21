import React from 'react';
import { Table, Space } from 'antd';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import ModalFile from "./ModalFile.jsx";
import { useNavigate } from 'react-router-dom';
import  { useMemo } from 'react';
console.log("Child render ho raha hai")
const Patientstable = ({ myData, setMyList, handlePatientEdit, selectedPatient, setSelectedPatient }) => {
  const [ispatientinfoDrawerOpen, setispatientinfoDrawerOpen] = useState(false);
  //const [selectedpatientRow, setSelectedpatientRow] = useState(null);
  const navigate = useNavigate();
  // const showpatientinfoDrawer = () => setispatientinfoDrawerOpen(true);

  const handleDelete = (key) => {
    const updatedData = myData.filter(item => item.key !== key);
    setMyList(updatedData);
  };
  const showpatientinfoDrawer = (record) => {
    setispatientinfoDrawerOpen(true);
    // console.log(record.MRNo);
    navigate(`/patient/${record.MRNo}`);
  }
  const columns = [
    {
      title: 'Token Priority',
      dataIndex: 'TokenPriority',
      key: 'TokenPriority',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Patient Name',
      dataIndex: 'PatientName',
      key: 'PatientName',
      render: text => <a>{text}</a>,
    },

    {
      title: 'MR No',
      dataIndex: 'MRNo',
      key: 'MRNo',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Bill',
      dataIndex: 'Bill',
      key: 'Bill',
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handlePatientEdit(record)}><Icon icon="line-md:edit-twotone" width="24" height="24" /></a>
          <a onClick={() => handleDelete(record.key)}><Icon icon="line-md:trash" width="24" height="24" /></a>
          <a onClick={() => { setSelectedPatient(record); showpatientinfoDrawer(record); }}><Icon icon="ic:round-info" width="24" height="24" /></a>
        </Space>
      )
    }
  ];

  return (
    <div>
      <Table columns={columns} dataSource={myData} />
      <ModalFile ispatientinfoDrawerOpen={ispatientinfoDrawerOpen} setispatientinfoDrawerOpen={setispatientinfoDrawerOpen} selectedPatient={selectedPatient} />
    </div>
  )
}

export default Patientstable;

