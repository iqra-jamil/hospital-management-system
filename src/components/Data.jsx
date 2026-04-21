import React, { useEffect, useState } from "react";
// import myData from "../assets/Datatable.json";

// import MyTable from "./MyTable";

// javascript filter function
const Data = (props) => {
  const mySearchValue = props.value;
  console.log(mySearchValue);

  const [patientNames, setpatientNames] = useState(props.patientDatastate);

  useEffect(() => {
    let updatedPatients;
    if (mySearchValue === "") {
      updatedPatients = props.patientDatastate;
    } else {
      updatedPatients = props.patientDatastate.filter((name) =>
        name.patient_name.toLowerCase().includes(mySearchValue.toLowerCase())
      )
    }
    setpatientNames(updatedPatients);
  }, [mySearchValue, props.patientDatastate]);
  return (
    <>
      <MyTable patientNames={patientNames} />
    </>
  );
};

export default Data;
