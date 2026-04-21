import React from 'react'
import { Button, Form, Input, Modal } from 'antd';
import { useEffect } from 'react';
import { getLocalStorageItem, setLocalStorageItem } from '../../utils/helpers';
const Doctordataform = ({ isdraddModalOpen, setIsdraddModalOpen, refreshData, isEditingrecord }) => {

  const [form] = Form.useForm();
  const handleCancel = () => {
    form.resetFields();
    setIsdraddModalOpen(false);
  };

  const onFinish = (values) => {
    let doctors = getLocalStorageItem('doctordata') || [];
    if (isEditingrecord) {
      let Editeddctr = doctors.map(item =>
        item.key === isEditingrecord.key ? { ...item, ...values } : item
      );
      setLocalStorageItem('doctordata', Editeddctr);
    }
    else {
      //adding new record
      let drFound = doctors.find(doct => doct.DocId
        === values.DocId);
      if (drFound) {
        alert("doctor with same ID already exists.");
        return;
      }
      const newDoctor = {
        key: Date.now(),
        DocId: values.DocId,
        DoctorName: values.DoctorName,
      };
      doctors.push(newDoctor);
      setLocalStorageItem('doctordata', doctors);
    }

    refreshData();
    handleCancel();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    if (isEditingrecord) {
      form.setFieldsValue(isEditingrecord)
    }
    else {
      form.resetFields();
    }
  })
  return (
    <>
      <Modal
        title="doctors Details"
        closable={true}
        open={isdraddModalOpen}
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
            label="DocId"
            name="DocId"
            rules={[{ required: true, message: 'Enter DocId' }]}
          >
            <Input placeholder="Enter DocId" type="number" disabled={isEditingrecord} />
          </Form.Item>

          <Form.Item
            label="Doctor Name"
            name="DoctorName"
            rules={[{ required: true, message: 'Enter DoctorName' }]}
          >
            <Input placeholder="Enter DoctorName" />
          </Form.Item>


          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default Doctordataform


// you use find when you only need to locate one record.
// example, check if an appointment already exists or get its data.

// you use map when you need to update the list.
// map goes through every item and replaces only the matched one while keeping the rest unchanged.