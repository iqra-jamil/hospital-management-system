import { Button, Form, Input, Modal, Select } from 'antd';
import React, { useEffect } from 'react';
import { getLocalStorageItem } from '../../utils/helpers';
import { setLocalStorageItem } from '../../utils/helpers';

const UserdataForm = ({ isaddModalOpen, setIsaddModalOpen, refreshData, isEditingrecord }) => {

  const [form] = Form.useForm();
  const handleCancel = () => {
    form.resetFields();
    setIsaddModalOpen(false);
  };

  const onFinish = (values) => {
    let users = getLocalStorageItem('userdata') || [];
    //editing existing record
    if (isEditingrecord) {
      let updateEditedusers = users.map((user) => user.key === isEditingrecord.key ? { ...user, ...values } : user);
      setLocalStorageItem('userdata', updateEditedusers);
    }

    //adding new record
    else {
      let userFound = users.find(user => user.empID === values.empID);
      if (userFound) {
        alert("User already exists, please login or use a different ID.");
        return;
      }
      if(values.isAdmin)
      {
        let adminFound = users.find(user=>user.isAdmin===true)
        if(adminFound)
        {
          alert("Only one admin allowed")
          return;
        }
      }
      const newUser = {
        key: Date.now(),
        Firstname: values.Firstname,
        empID: values.empID,
        password: values.password,
        fatherhusbandname: values.fatherhusbandname,
        Gender: values.Gender,
        DOB: values.DOB,
        age: values.age,
        City: values.City,
        province: values.province,
        // isAdmin: values.isAdmin === 'true'
        isAdmin: values.isAdmin
      };
      users.push(newUser);
      setLocalStorageItem('userdata', users);
    }

    refreshData();
    handleCancel();

  };
  useEffect(() => {
    if (isEditingrecord) {
      form.setFieldsValue(isEditingrecord);
    }
    else {
      form.resetFields();
    }
  }, [isEditingrecord])

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };



  return (
    <>
      <Modal
        title="Enter User Details"
        closable={true}
        open={isaddModalOpen}
        onOk={() => form.submit()}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical"
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First name"
            name="Firstname"
            rules={[{ required: true, message: 'Enter first name' }]}
          >
            <Input placeholder="Enter First Name" />
          </Form.Item>

          <Form.Item
            label="empID"
            name="empID"
            rules={[{ required: true, message: 'Enter empID' }]}
          >
            <Input placeholder="Enter empID" disabled={isEditingrecord} />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: 'Enter password' }]}
          >
            <Input.Password type="password" placeholder="Enter password" />
          </Form.Item>
          <Form.Item
            label="last name"
            name="fatherhusbandname"
            rules={[{ required: true, message: 'Enter father/husband name' }]}
          >
            <Input placeholder="Enter father/husband name" />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="Gender"
            rules={[{ required: true, message: 'Select Gender' }]}
          >
            <Select placeholder="Select Gender">
              <Select.Option value="Male">Male</Select.Option>
              <Select.Option value="Female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="DOB"
            name="DOB"
            rules={[{ required: true, message: 'Enter DOB' }]}
          >
            <Input type="date" />
          </Form.Item>

          <Form.Item
            label="age"
            name="age"
            rules={[{ required: true, message: 'Enter age' }]}
          >
            <Input placeholder="Enter age" />
          </Form.Item>

          <Form.Item
            label="City"
            name="City"
            rules={[{ required: true, message: 'Enter City' }]}
          >
            <Input placeholder="Enter City" />
          </Form.Item>

          <Form.Item
            label="province"
            name="province"
            rules={[{ required: true, message: 'Select province' }]}
          >
            <Select  placeholder="province" >
              <Select.Option value="Punjab">Punjab</Select.Option>
              <Select.Option value="Sindh">Sindh</Select.Option>
              <Select.Option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</Select.Option>
              <Select.Option value="Balochistan">Balochistan</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="isAdmin"
            name="isAdmin"
            rules={[{ required: true, message: 'Select if admin' }]}
          >
            <Select placeholder="Select">
              <Select.Option value={true}>Yes</Select.Option>
              <Select.Option value={false}>No</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UserdataForm;


