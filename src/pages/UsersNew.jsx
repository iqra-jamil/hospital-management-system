import React, { useState, useEffect } from 'react';
import Searchbox from '../components/Searchbox';
import UserdataForm from "../components/users/UserdataForm";
import MyTable from '../components/users/MyTable';
import MyButton from '../components/MyButton';
import {getLocalStorageItem } from '../utils/helpers';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const UsersNew = () => {
  const myData = getLocalStorageItem('userdata') || [];
  const [myList, setMyList] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  const [isEditingrecord, setisEditingrecord] = useState(null);
  const [isaddModalOpen, setIsaddModalOpen] = useState(false);
  let [useParamSelcteduser,setuseParamSelcteduser]=useState(null);
  const navigate=useNavigate();
  const {empId}=useParams();
  //const empId=useParams();
  const showaddModal = () => {
    setisEditingrecord(null) 
    setIsaddModalOpen(true);
  }

  //edit
  const handleEdit = (record) => {
    setisEditingrecord(record);
    setIsaddModalOpen(true);
    navigate(`/Users/${record.empID}`);
  }

  useEffect(() => {
    setMyList(myData)
  }, []);
 // read from localstorage & find empId (useparams)
 useEffect(()=>{
   const myuserData=getLocalStorageItem('userdata');
   let newuserData=myuserData.find((user)=>{
     return  user.empID=empId;
   });
    setuseParamSelcteduser(newuserData);
 },[])
  const handleSearch = (value) => {
    setSearchValue(value);
  }
  
  useEffect(() => {

    if (searchValue !== "") {
      const myNewList = getLocalStorageItem('userdata').filter((item) => item.Firstname.toLowerCase().includes(searchValue))
      setMyList(myNewList);

    }
    else {
      setMyList([... (getLocalStorageItem('userdata') || [])]);
    }

  }, [searchValue])

  const refreshData = () => {
    const myData = JSON.parse(localStorage.getItem("userdata"));
    setMyList(myData);
  }

  return (

    <div className="dashBoardContainer">
      <div className="ContainerOne">
        <div className="searchBoxCont">
          <Searchbox value={searchValue} onChange={handleSearch} />
        </div>
      </div>

      <div className='topBtn'>
        <MyButton onClickHandler={showaddModal} title="Add User" />
      </div>

      <div className="userdataform">
        {isaddModalOpen && <UserdataForm isaddModalOpen={isaddModalOpen} setIsaddModalOpen={setIsaddModalOpen} refreshData={refreshData} isEditingrecord={isEditingrecord} />}
      </div>
     <div className="ContainerTwo users-table">
        <div className="dataCont">
          {/* {myList.length > 0 ? <MyTable myData={myList} /> : <p>No data found</p>} */}
          <MyTable useParamSelcteduser={useParamSelcteduser} setuseParamSelcteduser={setuseParamSelcteduser} myData={myList} setMyList={setMyList} handleEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
}
export default UsersNew