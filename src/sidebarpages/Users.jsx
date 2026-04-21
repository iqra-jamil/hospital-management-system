import React from 'react'
import Searchbox from '../components/Searchbox';
//import UserdataForm from './UserdataForm.jsx';
// import UserdataForm from "../components/UserdataForm"
import UserData from "../components/UserData"
import { useState } from 'react';
import UsersNew from '../pages/UsersNew';
const Users = ({ userDatastate, setuserDatastate }) => {

  let [searchValue, setSearchValue] = useState("");
  const myData = JSON.parse(localStorage.getItem("userdata"));
  const handleSearch = (value) => {
    setSearchValue(value);
  }

  return (

    <div className="dashBoardContainer">

      <div className="ContainerOne">
        <div className="searchBoxCont">
          <Searchbox value={searchValue} onChange={handleSearch} />
        </div>
      </div>
      <div className="ContainerTwo">

        <div className="dataCont">

          <UserData userDatastate={userDatastate} value={searchValue} onChange={() => { }} />
        </div>
      </div>
    </div>
  );
}
export default Users