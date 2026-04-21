import React from 'react'
import Appointmenttable from '../components/Appointment/Appointmenttable'
import { getLocalStorageItem } from '../utils/helpers'
import { useState } from 'react';
import { useEffect } from 'react';
import Searchbox from '../components/Searchbox';
import { useNavigate } from 'react-router-dom';
const Appointmentlist = () => {
  let getappointmentdata = getLocalStorageItem('Appointment') || [];
  let doctordata = getLocalStorageItem('doctordata') || [];
  let patientdata = getLocalStorageItem('data') || [];
  console.log('sir junaid getappointmentdata', getappointmentdata);
  console.log('sir junaid doctordata', doctordata);
  console.log('sir junaid patientdata', patientdata);
  const navigate = useNavigate();
  let [appoinmetData, setappoinmetData] = useState('');
  let [searchValue, setSearchValue] = useState("");
  //find, findIndex, filter,  map, for, forEach,reduce
  useEffect(() => {
    const newData = getappointmentdata.map((res) => {
      const found = doctordata.find((item) => item.DocId == res.DocId)
      return {
        ...res,
        ...found
      }
    })
    console.log("junaid newData", newData);
    setappoinmetData(newData);
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);
  }
  function handleEdit(record) {
    navigate('/Appointment', { state: { isEditingrecord: record, selectedAppointment: record } });
  }
  useEffect(() => {

    if (searchValue !== "") {
      const NewAptList = getLocalStorageItem('Appointment').filter((item) => item.PatientName.toLowerCase().includes(searchValue))
      setappoinmetData(NewAptList);
    }
    else {
      setappoinmetData([... (getLocalStorageItem('Appointment') || [])]);
    }

  }, [searchValue])


  return (
    <>
      <div className="ContainerOne">
        <div className="searchBoxCont">
          <Searchbox value={searchValue} onChange={handleSearch} />
        </div>
      </div>
      <div className="ContainerTwo">
        <div className="dataCont">
          <Appointmenttable handleEdit={handleEdit} appoinmetData={appoinmetData} setappoinmetData={setappoinmetData} />
        </div>
      </div>

    </>
  )
}

export default Appointmentlist
