import React, { useState, useEffect, useRef } from "react";
import ImperativeTable from "../components/Useimperitivehook/imperativeTable";
import Imperativedataform from "../components/Useimperitivehook/Imperativedataform";
import Imperativeinfodrawer from "../components/Useimperitivehook/Imperativeinfodrawer";
import Searchbox from "../components/Searchbox";
import { getLocalStorageItem } from '../utils/helpers';

const Useimperativehook = () => {
  const myData = getLocalStorageItem('doctordata') || [];
  const [myList, setMyList] = useState([]);
  const [isdraddModalOpen, setIsdraddModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isEditingrecord, setisEditingrecord] = useState(null);
  const formRef = useRef(); 
  const showdraddModal = () => {
    setisEditingrecord(null);
    setIsdraddModalOpen(true);
  };

  const handleDctrEdit = (record) => {
    setisEditingrecord(record);
    setIsdraddModalOpen(true);
  };

  useEffect(() => {
    setMyList(myData);
  }, []);

  const refreshData = () => {
    const myData = JSON.parse(localStorage.getItem("doctordata")) || [];
    setMyList(myData);
  };

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue !== "") {
      const myNewList = getLocalStorageItem('doctordata').filter((item) =>
        item.DoctorName.toLowerCase().includes(searchValue)
      );
      setMyList(myNewList);
    } else {
      setMyList([... (getLocalStorageItem('doctordata') || [])]);
    }
  }, [searchValue]);

  return (
    <div className="dashBoardContainer">
      <div className="ContainerOne">
        <div className="searchBoxCont">
          <Searchbox value={searchValue} onChange={handleSearch} />
        </div>
      </div>

      <div className="doctorsdataform">
        <Imperativedataform
          ref={formRef}
          isEditingrecord={isEditingrecord}
          isdraddModalOpen={isdraddModalOpen}
          setIsdraddModalOpen={setIsdraddModalOpen}
          refreshData={refreshData}
        />
      </div>

      <div className="ContainerTwo">
        <div className="dataCont">
          <ImperativeTable myData={myList} setMyList={setMyList} handleDctrEdit={handleDctrEdit} formRef={formRef} />
        </div>
      </div>
    </div>
  );
};

export default Useimperativehook;
