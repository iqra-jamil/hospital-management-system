import { Button,Form, Input, Modal } from 'antd';
import React, { useState } from 'react';


const App = ({ patientDatastate, setpatientDatastate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 

  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Success:', values);

    const newPatient = {
      key: Date.now(),
      //It creates a unique ID based on the exact millisecond when the patient was registered. 
      //key : values.nameofinputfield
      token_priority: values.token_priority,
      patient_name: values.patient_name,
      mr_no: values.mr_no,
      age: values.age,
      father_name: values.father_name,
      dob: values.dob,
      total: values.total
    }
    setIsModalOpen(false);
    let patients = JSON.parse(localStorage.getItem('data')) || [];
    patients.push(newPatient);
    localStorage.setItem('data', JSON.stringify(patients));
    // setpatientDatastate([...patientDatastate, newPatient])

    setpatientDatastate(patients)
    form.resetFields();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    // setTokenPriority('') etc
    form.resetFields()
    setIsModalOpen(false)

  };

  return (
    <>
      <Button type="primary" onClick={showModal} className='registerBtn'>
        Register Patient
      </Button>
      <Modal
        title="Enter Patient Details"
        closable={true}
        open={isModalOpen}
        onOk={() => form.submit()}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
         <Form.Item
            label="Token Priority"
            name="token_priority"
            rules={[{ required: true, message: 'Enter token priority' }]}
          >
            {/* <Input type="text" placeholder="Enter Token Priority" value={tokenPriority} onChange={(e)=>setTokenPriority(e.target.value)}/> */}
            <Input type="text" placeholder="Enter Token Priority" />
          </Form.Item>

          <Form.Item
            label="Patient Name"
            name="patient_name"
            rules={[{ required: true, message: 'Enter patient name' }]}
          >
            <Input type="text" placeholder="Enter patient name" />
          </Form.Item>

          <Form.Item
            label="MR No"
            name="mr_no"
            rules={[{ required: true, message: 'Enter MR number' }]}
          >
            <Input type="number" placeholder="Enter MR number" />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: 'Enter age' }]}
          >
            <Input type="number" placeholder="Enter age" />
          </Form.Item>

          <Form.Item
            label="Father Name"
            name="father_name"
            rules={[{ required: true, message: 'Enter father name' }]}
          >
            <Input type="text" placeholder="Enter father name" />
          </Form.Item>

          <Form.Item
            label="DOB"
            name="dob"
            rules={[{ required: true, message: 'Enter date of birth' }]}
          >
            <Input type="date" placeholder="Enter DOB" />
          </Form.Item>

          <Form.Item
            label="Total"
            name="total"
            rules={[{ required: true, message: 'Enter total amount' }]}
          >
            <Input type="text" placeholder="Enter total amount" />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

        </Form>

      </Modal>
    </>
  );
};
export default App;







//1.remove all the usestaetes Ant Design Form automatically collects input values and passes them to onFinish without needing separate state variables.
//2.and thats the value object which is passing input values to on finish automatically;
//3.no longer need to call setTokenPriority
//4.remove all value={...} and onChange={...}
