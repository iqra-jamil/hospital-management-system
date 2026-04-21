import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <h1>dashboard</h1>
    </div>
  )
}

export default Dashboard











// import React from 'react'
// import Searchbox from '../components/Searchbox';
// import Data from '../components/Data';
// import { useState } from 'react';

// const Dashboard = () => {

//   let [searchValue, setSearchValue] = useState("");
//   const [usersData, setUsersData] = useState([])
//   const [refreshData, setRefreshData] = useState(true)

//   useEffect(() => {
//     if (refreshData) {
//       const myData = JSON.parse(localStorage.getItem("data"));
//       setUsersData(myData)
//       setRefreshData(false)
//     }

//   }, [refreshData])


//   const handleSearch = (value) => {
//     setSearchValue(value);
//   }

//   return (

//     <div className="dashBoardContainer">
//       <h1>Dashboard</h1>
//       <div className="ContainerOne">
//         <div className="searchBoxCont">
//           <Searchbox value={searchValue} onChange={handleSearch} />
//         </div>
//       </div>
//       <div className="ContainerTwo">
//         <div className="dataCont">
//           <Data value={searchValue} onChange={() => { }} />
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Dashboard