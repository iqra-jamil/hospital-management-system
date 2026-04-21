import React from 'react'
import Searchbox from '../components/Searchbox';
import Data from '../components/Data';
import { useState } from 'react';
const Patientlist = ({ patientDatastate }) => {

  let [searchValue, setSearchValue] = useState("");
  const myData = JSON.parse(localStorage.getItem("data"));
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
          <Data patientDatastate={patientDatastate} value={searchValue} onChange={() => { }} />
        </div>
      </div>
    </div>
  );
}
export default Patientlist
