import React, { useEffect } from 'react'
import { Button, Form, Input, Modal } from 'antd';
import { getLocalStorageItem, setLocalStorageItem } from '../../utils/helpers';
import { useRef } from 'react';
const MydataForm = ({ ispatientaddModalOpen, setispatientaddModalOpen, refreshData, isEditingrecord, selectedPatient }) => {
  const inputRef = useRef(null);
  const secondFieldRef = useRef(null);
  const thirdFieldRef = useRef(null);
   const fourthFieldRef = useRef(null); 
  const [form] = Form.useForm();
  const handleCancel = () => {
    form.resetFields();
    setispatientaddModalOpen(false);
  };
  //useRef hook
  useEffect(() => {
    setTimeout(() => {
      if (ispatientaddModalOpen) {
        inputRef.current.focus();
      }
    },0)
  }, [ispatientaddModalOpen]);
  //move focus to the nxt field 
  const focusNext=(ref)=>{
     ref.current.focus();
  }
// const secondFieldfocus=()=>{
//   secondFieldRef.current.focus();
// }
  const onFinish = values => {
    let patient = getLocalStorageItem('data') || [];
    if (isEditingrecord) {
      let EditedPatient = patient.map(item =>
        item.key === isEditingrecord.key ? { ...item, ...values } : item
      );
      setLocalStorageItem('data', EditedPatient)
    }
    else {
      let patientFound = patient.find(patient => patient.MRNo === values.MRNo);
      if (patientFound) {
        alert("Patient already exists");
        return;
      }

      const newpatient = {
        key: Date.now(),
        TokenPriority: values.TokenPriority,
        PatientName: values.PatientName,
        MRNo: values.MRNo,
        Bill: values.Bill,
      };

      patient.push(newpatient);
      setLocalStorageItem('data', patient);
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
        title="Enter Patient Details"
        closable={true}
        open={ispatientaddModalOpen}
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
            label="Token Priority"
            name="TokenPriority"
            rules={[{ required: true, message: 'Enter Token Priority' }]}
          >
            <Input placeholder="Enter Token Priority" ref={inputRef}  onPressEnter={()=>focusNext(secondFieldRef)}/>
          </Form.Item>

          <Form.Item
            label="Patient Name"
            name="PatientName"
            rules={[{ required: true, message: 'Enter PatientName' }]}
          >
            <Input placeholder="Enter PatientName" ref={secondFieldRef} onPressEnter={()=>focusNext(thirdFieldRef)}/>
          </Form.Item>
          <Form.Item
            label="MR No"
            name="MRNo"
            rules={[{ required: true, message: 'Enter MRNo' }]}
          >
            <Input type="text" placeholder="Enter MRNo" disabled={isEditingrecord} ref={thirdFieldRef} onPressEnter={()=>focusNext(fourthFieldRef)}/>
          </Form.Item>
          <Form.Item
            label="Bill"
            name="Bill"
            rules={[{ required: true, message: 'Enter Bill' }]}
          >
            <Input placeholder="Enter Bill" ref={fourthFieldRef}/>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default MydataForm


//comments 
//q k patientaddModalOpen jo h wo hum ny antdeisgn ka use kia hoa h 
//or us modal ka jo content h wo thori der k baad mount hota jab tk wo content he mount nai hota to useRef null hota h jis wja sy focus kaam he nai krha tha to focus ko us delay k stah match krny k liy hum ny setTimeout use kia 