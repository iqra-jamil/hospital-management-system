
import React, { useEffect, useState } from "react";
import Usertable from "../components/Usertable"



const UserData = (props) => {
  const mySearchValue = props.value;
  console.log(mySearchValue);

  const [UserNames, setuserNames] = useState(props.userDatastate);

  useEffect(() => {
    let updatedUsers;
    if (mySearchValue === "") {
       updatedUsers = props.userDatastate;
    } else {
     updatedUsers = props.userDatastate.filter((name) =>
        name.Firstname.toLowerCase().includes(mySearchValue.toLowerCase())
      );
    }
    setuserNames(updatedUsers);
  }, [mySearchValue, props.userDatastate]);
  return (
    <>
  
      <Usertable UserNames={UserNames}/>
    </>
  );
};

export default UserData;
