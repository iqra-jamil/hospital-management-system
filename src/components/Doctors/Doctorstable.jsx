import React from 'react'
import { Table,Space } from 'antd';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Doctorsmodalfile from './Doctorsmodalfile';
const Doctorstable = ({myData,setMyList,handleDctrEdit }) => {
      const [selectedDctrRow, setSelectedDctrRow] = useState(null);
      const [isdctrinfoDrawerOpen, setisdctrinfoDrawerOpen] = useState(false);
      const showDctrinfoDrawer = () => setisdctrinfoDrawerOpen(true);
    const handleDelete = (key) => {
    const updatedData = myData.filter(item => item.key !== key);
    setMyList(updatedData);
  };
      const columns = [
    {
      title: 'Doctor Id',
      dataIndex: 'DocId',
      key: 'DocId'
    },
    {
      title: 'Doctor Name',
      dataIndex: 'DoctorName',
      key: 'DoctorName'
    },
        {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a  onClick={()=>  handleDctrEdit(record)}><Icon icon="line-md:edit-twotone" width="24" height="24" /></a>
          <a  onClick={()=> handleDelete(record.key)}><Icon icon="line-md:trash" width="24" height="24" /></a>
          <a onClick={()=> {setSelectedDctrRow(record); showDctrinfoDrawer();}}><Icon icon="ic:round-info" width="24" height="24" /></a>
        </Space>
       
      )
    }
];
  return (
    <div>
         <Table columns={columns} dataSource={myData} />
          <Doctorsmodalfile isdctrinfoDrawerOpen={isdctrinfoDrawerOpen} setisdctrinfoDrawerOpen={setisdctrinfoDrawerOpen} selectedDctrRow={selectedDctrRow}/>
    </div>
  )
}

export default Doctorstable
