import React from 'react'
import { Space, Table } from 'antd';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Appointmentinfomodal from './Appointmentinfomodal';
const Appointmenttable = ({ appoinmetData, setappoinmetData, handleEdit }) => {
  const [selectedAppointment, setselectedAppointmen] = useState(null);
  const [isAptinfoDrawerOpen, setisAptinfoDraweOpen] = useState(false);
  const showAptrinfoDrawer = () => setisAptinfoDraweOpen(true);
  const handleDelete = (key) => {
    const updatedData = appoinmetData.filter(item => item.key !== key);
    setappoinmetData(updatedData);
  };
  const columns = [
    {
      title: 'MR No',
      dataIndex: 'MRNo',
      key: 'MRNo',
    },
    {
      title: 'Patient Name',
      dataIndex: 'PatientName',
      key: 'PatientName',
    },
    {
      title: 'DocId',
      dataIndex: 'DocId',
      key: 'DocId',
    },
    {
      title: 'Doctor Name',
      dataIndex: 'DoctorName',
      key: 'DoctorName',
    },

    {
      title: 'email adress',
      dataIndex: 'emailadress',
      key: 'emailadress',
    },
    {
      title: 'phone number',
      dataIndex: 'phonenumber',
      key: 'phonenumber',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record)}><Icon icon="line-md:edit-twotone" width="24" height="24" /></a>
          <a onClick={() => handleDelete(record.key)}><Icon icon="line-md:trash" width="24" height="24" /></a>
          <a onClick={() => { setselectedAppointmen(record); showAptrinfoDrawer(); }}><Icon icon="ic:round-info" width="24" height="24" /></a>
        </Space>

      )
    }

  ];


  return (
    <div>
      <Table dataSource={appoinmetData} columns={columns} />
      <Appointmentinfomodal isAptinfoDrawerOpen={isAptinfoDrawerOpen} setisAptinfoDraweOpen={setisAptinfoDraweOpen} selectedAppointment={selectedAppointment} />
    </div>
  )
}

export default Appointmenttable

