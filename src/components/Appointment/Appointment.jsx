import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Radio, Space, Select } from 'antd';
import { getLocalStorageItem } from '../../utils/helpers';
import { setLocalStorageItem } from '../../utils/helpers';
import { useLocation } from 'react-router-dom'
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
//upload image in the form
const Appointment = () => {
  const myData = getLocalStorageItem('data') || [];//patientdata
  const drsData = getLocalStorageItem('doctordata') || [];
  let [patientData, setpatientData] = useState([]);
  let [doctorsData, setdoctorsData] = useState([]);
  const [selectedDocId, setSelectedDocId] = useState('');
  //const [selectedDoc, setSelectedDoc] = useState('');
  const [selectedpatient, setSelectedpatient] = useState('');
  const { state } = useLocation();
  
  useEffect(() => {
    setpatientData(myData)
  }, []);
  useEffect(() => {
    setdoctorsData(drsData)
  }, []);

  const [form] = Form.useForm();
  const onFinish = values => {
    let appointments = getLocalStorageItem('Appointment') || [];
    if (state?.isEditingrecord) {
      let EditedApt = appointments.map(item =>
        item.key === state.isEditingrecord.key ? { ...item, ...values } : item
      );
      setLocalStorageItem('Appointment', EditedApt);
    }
    else {
      let patientFound = appointments.find(
        patient => patient.MRNo === values.MRNo
      )
      if (patientFound) {
        alert("Appointment of Patient with the same MR Number is already Booked");
        return
      }

      const newAppointment = {
        ...values,
        key: Date.now(),
        DocId: selectedDocId
      }

      appointments.push(newAppointment)
      setLocalStorageItem('Appointment', appointments)
    }
    alert("submitted");
 }


  const handlePatientChange = (PatientName) => {
    let selectedPatient = patientData.find((patient) => {
      return patient.PatientName === PatientName;
    })
    setSelectedpatient(selectedPatient);
    //console.log("iqra",selectedPatient);
    form.setFieldsValue({ MRNo: selectedPatient.MRNo })
    console.log('MRNo:', selectedPatient.MRNo)
  }
  const handleDoctorChange = (DoctorName) => {
    let selctDoctor = doctorsData.find((doctor) => {
      return doctor.DoctorName === DoctorName;
    })
    //console.log(DoctorName);
    //setSelectedDoc(DoctorName);
    setSelectedDocId(selctDoctor.DocId);
  }

  //edit useEffect
  useEffect(() => {
    if (state?.isEditingrecord) {
      form.setFieldsValue({
        ...state.isEditingrecord,
        PatientName: state.selectedAppointment.PatientName,
        DoctorName: state.selectedAppointment.DoctorName
      });
      setSelectedpatient(state.selectedAppointment.PatientName);
      setSelectedDocId(state.selectedAppointment.DocId);
    } else {
      form.resetFields();
    }
  }, []);

  return (

    <div className='Appointmentform'>

      <Form autoComplete="off" layout="vertical"
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <div className="appointment-header">
          <h1 className="appointment-title">Book an Appointment</h1>
          <Form.Item name="PatientName" label="Patient Name" rules={[{ required: true }]}>
            <Select placeholder="Patient Name" onChange={handlePatientChange}>
              {patientData.map((patient, index) =>
                <Select.Option key={index} value={patient.PatientName}>{patient.PatientName
                }</Select.Option>
              )
              }
            </Select>
          </Form.Item>
          <Form.Item name="MRNo" label="MRNo" rules={[{ required: true }]}>
            <Input placeholder='MRNo' />
          </Form.Item>

          <Form.Item name="emailadress" label="email adress" rules={[{ required: true }]} >
            <Input placeholder='email adress' type="email" />
          </Form.Item>
          <Form.Item name="phonenumber" label="phone number" rules={[{ required: true }]} >
            <Input placeholder='phone number' type="tel" />
          </Form.Item>

          <Form.Item name="DoctorName" label="Doctor name" rules={[{ required: true }]} >
            <Select placeholder="Select Doctor" onChange={handleDoctorChange}>
              {doctorsData.map((doctor, index) =>
                <Select.Option key={index} value={doctor.DoctorName}>{doctor.DoctorName
                }</Select.Option>
              )}

            </Select>
          </Form.Item>
          <Form.Item name="Appointment type" label=" Appointment type" rules={[{ required: true }]} >
            <Radio.Group defaultValue="Initial consultation visit">
              <Radio value="Initial consultation visit">Initial consultation visit</Radio>
              <Radio value="Follow-up visit">Follow-up visit</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit" className='bookapointment'>
                Submit
              </Button>
            </Space>
          </Form.Item>
        </div>

      </Form>
    </div>

  )
}
export default Appointment

// in appointment form we have Patient Name, MRNo,email adress,phn number,Doctor name,Appointment type
// in appintmentlist we have MR No,	Patient Name,	DocId	Doctor Name	email ,phone number
// so edit kia krna h 