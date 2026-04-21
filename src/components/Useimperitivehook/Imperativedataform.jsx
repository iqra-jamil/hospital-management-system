import React, { useEffect, forwardRef, useImperativeHandle } from 'react';
import { Button, Form, Input } from 'antd';
import { getLocalStorageItem, setLocalStorageItem } from '../../utils/helpers';

const Imperativedataform = forwardRef(({  setIsdraddModalOpen, refreshData, isEditingrecord }, ref) => {
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    setFormData: (data) => {
      form.setFieldsValue(data);
      setIsdraddModalOpen(true); 
    }
  }));

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
    } else {
      let drFound = doctors.find(doct => doct.DocId === values.DocId);
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

  useEffect(() => {
    if (isEditingrecord) {
      form.setFieldsValue(isEditingrecord);
    } else {
      form.resetFields();
    }
  }, [isEditingrecord, form]);

  return (
    <Form layout="vertical"
      form={form}
      name="basic"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item label="DocId" name="DocId" rules={[{ required: true, message: 'Enter DocId' }]}>
        <Input placeholder="Enter DocId" type="number" disabled={isEditingrecord} />
      </Form.Item>

      <Form.Item label="Doctor Name" name="DoctorName" rules={[{ required: true, message: 'Enter DoctorName' }]}>
        <Input placeholder="Enter DoctorName" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
});

export default Imperativedataform;
