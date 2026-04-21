import React, { useState } from 'react';
import { Space, Table } from 'antd';
import { Icon } from '@iconify/react';
import UserModalfile from './UserModalfile.jsx';
import { useNavigate } from 'react-router-dom';
const MyTable = ({ myData, setMyList,handleEdit,useParamSelcteduser,setuseParamSelcteduser}) => {
  const [isinfodrawerOpen, setinfoIsdrawerOpen] = useState(false);
  //const [selectedRow, setSelectedRow] = useState(null);
  const navigate= useNavigate();
  //  const showinfodrawer = () => setinfoIsdrawerOpen(true);
 const showinfodrawer = (record) => {
  setinfoIsdrawerOpen(true);
  navigate(`/Users/${record.empID}`);
};
  const handleDelete = (key) => {
    const updatedData = myData.filter(item => item.key !== key);
    setMyList(updatedData);
  };

  const columns = [
    {
      title: 'empID',
      dataIndex: 'empID',
      key: 'empID'
    },
    {
      title: 'password',
      dataIndex: 'password',
      key: 'password'
    },
    {
      title: 'First name',
      dataIndex: 'Firstname',
      key: 'Firstname'
    },
    {
      title: 'last name',
      dataIndex: 'fatherhusbandname',
      key: 'fatherhusbandname'
    },
    {
      title: 'Gender',
      dataIndex: 'Gender',
      key: 'Gender'
    },
    {
      title: 'DOB',
      dataIndex: 'DOB',
      key: 'DOB'
    },
    {
      title: 'age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'City',
      dataIndex: 'City',
      key: 'City'
    },
    {
      title: 'province',
      dataIndex: 'province',
      key: 'province'
    },
    {
      title: 'isAdmin',
      dataIndex: 'isAdmin',
      key: 'isAdmin',
      render: (_, record) => record.isAdmin ? 'Yes' : 'No'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
       (record.isAdmin===true) ? null :
        <Space size="middle">
          <a onClick={()=>handleEdit(record)}><Icon icon="line-md:edit-twotone" width="24" height="24" /></a>
          <a onClick={()=> handleDelete(record.key)}><Icon icon="line-md:trash" width="24" height="24" /></a>
          <a onClick={()=> {setuseParamSelcteduser(record); showinfodrawer(record) }}><Icon icon="ic:round-info" width="24" height="24" /></a>
        </Space>
      )
    }
  ];

  return (
    <>
      <Table columns={columns} dataSource={myData} />
      <UserModalfile isinfodrawerOpen={isinfodrawerOpen} setinfoIsdrawerOpen={setinfoIsdrawerOpen} useParamSelcteduser={useParamSelcteduser} />
    </>
  );
};

export default MyTable;
