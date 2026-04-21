import React, { useCallback } from 'react'
import Patientstable from '../components/patients/Patientstable'
import { useState, useEffect } from 'react';
import { getLocalStorageItem } from '../utils/helpers';
import MyButton from '../components/MyButton';
import Searchbox from '../components/Searchbox';
import MydataForm from '../components/patients/MydataForm';
import { useNavigate, useParams } from 'react-router-dom';
import Sortpatientdropdown from '../components/patients/Sortpatientdropdown';
import { useMemo } from 'react';
const PatientsNew = () => {
  const { mrno } = useParams();
  const myData = getLocalStorageItem('data');
  const [myList, setMyList] = useState([]);
  const [ispatientaddModalOpen, setispatientaddModalOpen] = useState(false);
  const [isEditingrecord, setisEditingrecord] = useState(null);
  let [searchValue, setSearchValue] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [sortField, setSortField] = useState(""); 

  const navigate=useNavigate();
 
console.log("Parent render ho raha hai")
  const showaddpatientModal = () => {
    setisEditingrecord(null);
    setispatientaddModalOpen(true);
  };
  // const handlePatientEdit = (record) => {
  //   setisEditingrecord(record)
  //   setispatientaddModalOpen(true);
  //   navigate(`/patient/${record.MRNo}`);
  // };
  //useCallback hook
  const handlePatientEdit = useCallback((record) => {
    setisEditingrecord(record)
    setispatientaddModalOpen(true);
    navigate(`/patient/${record.MRNo}`);
  }, [setisEditingrecord, setispatientaddModalOpen]);
  console.log('cheking refernce',window.prev === handlePatientEdit);
  window.prev = handlePatientEdit

//usememo hook
const handleSort = (field) => {
setSortField(field);
if (field === "") {
setMyList(getLocalStorageItem('data') || []);
}
// useMemo sirf value calculate karta hai, state update ya side effect nahi karta
}

const sortedList = useMemo(() => {
  const listCopy = [...myList];
  
  if (sortField === "Bill") {
    listCopy.sort((a, b) => Number(a.Bill) - Number(b.Bill));
  } else if (sortField === "TokenPriority") {
    const order = { high: 1, medium: 2, low: 3 };
    listCopy.sort((a, b) => order[a.TokenPriority] - order[b.TokenPriority]);
  }

  return listCopy;
}, [myList, sortField]); 
// useMemo recalculates only if myList ya sortField change ho



  useEffect(() => {
    setMyList(myData);
  }, []);
  
  //find mrno (useparam)
  useEffect(() => {
    const myData = getLocalStorageItem('data') || [];
    let newData = myData.find((patient) => {
      return patient.MRNo === mrno;
       //will return entire obj 
    })
    setSelectedPatient(newData);
    // console.log("iqra newData : ", newData);
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);
  }

  useEffect(() => {
    if (searchValue !== "") {
      const myNewList = getLocalStorageItem('data').filter((item) => item.PatientName.toLowerCase().includes(searchValue))
      setMyList(myNewList);
    }
    else {
      setMyList([...getLocalStorageItem('data') || []]);
    }

  }, [searchValue])

  const refreshData = () => {
    const myData = JSON.parse(localStorage.getItem('data'));
    setMyList(myData);
  }

  return (
    <div className="dashBoardContainer">
      <div className="ContainerOne">
        <div className="searchBoxCont">
          <Searchbox value={searchValue} onChange={handleSearch} />
        </div>
      </div>
    <div className="sortlists">
     <Sortpatientdropdown handleSort={handleSort}/>
     </div>
      <div className='topBtn'>
        <MyButton onClickHandler={showaddpatientModal} title="Register Patient" />
      </div>
      <div className="patientdataform">
        {ispatientaddModalOpen && <MydataForm ispatientaddModalOpen={ispatientaddModalOpen} setispatientaddModalOpen={setispatientaddModalOpen} refreshData={refreshData} isEditingrecord={isEditingrecord} />}

      </div>
      <div className="ContainerTwo">
        <div className="dataCont">
          <Patientstable  myData={sortedList} setMyList={setMyList} handlePatientEdit={handlePatientEdit} selectedPatient={selectedPatient}
            setSelectedPatient={setSelectedPatient} />
        </div>
      </div>

    </div>
  )
}

export default PatientsNew



