import React from 'react'
import Doctorstable from '../components/Doctors/Doctorstable'
import Doctordataform from '../components/Doctors/Doctordataform';
import MyButton from '../components/MyButton';
import Searchbox from '../components/Searchbox';
import { useState, useEffect } from 'react';
import { getLocalStorageItem } from '../utils/helpers';
const DoctorsNew = () => {
  const myData = getLocalStorageItem('doctordata') || [];
  const [myList, setMyList] = useState([]);
  const [isdraddModalOpen, setIsdraddModalOpen] = useState(false);
  let [searchValue, setSearchValue] = useState("");
  const [isEditingrecord, setisEditingrecord] = useState(null);
  const showdraddModal = () => {
    setisEditingrecord(null)
    setIsdraddModalOpen(true);
  }
  const handleDctrEdit = (record) => {
    setisEditingrecord(record)
    setIsdraddModalOpen(true);
  };
  useEffect(() => {
    setMyList(myData)
  }, []);
  const refreshData = () => {
    const myData = JSON.parse(localStorage.getItem("doctordata")) || [];
    setMyList(myData);
  }
  const handleSearch = (value) => {
    setSearchValue(value);
  }
  useEffect(() => {

    if (searchValue !== "") {
      const myNewList = getLocalStorageItem('doctordata').filter((item) => item.DoctorName.toLowerCase().includes(searchValue))
      setMyList(myNewList);

    }
    else {
      setMyList([... (getLocalStorageItem('doctordata') || [])]);
    }

  }, [searchValue])
  return (
    <>
      <div className="dashBoardContainer">
        <div className="ContainerOne">
          <div className="searchBoxCont">
            <Searchbox value={searchValue} onChange={handleSearch} />
          </div>
        </div>

        <div className='topBtn'>
          <MyButton onClickHandler={showdraddModal} title="Add Doctor" />
        </div>

        <div className="doctorsdataform">
          {isdraddModalOpen && <Doctordataform isEditingrecord={isEditingrecord} isdraddModalOpen={isdraddModalOpen} setIsdraddModalOpen={setIsdraddModalOpen} refreshData={refreshData} />}
        </div>
        <div className="ContainerTwo">
          <div className="dataCont">
            <Doctorstable myData={myList} setMyList={setMyList} handleDctrEdit={handleDctrEdit} />
          </div>
        </div>
      </div>
    </>

  )
}

export default DoctorsNew
