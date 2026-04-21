import React from 'react'
import { Navigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
const PrivateRoute = ({children}) => {
  //get the token generated based on loggedin status
   let token=localStorage.getItem("acessToken")
  return (
    <div>
         {token ? children : <Navigate to= "/"/>}  
    </div>
  )
}

export default PrivateRoute

// we can directly acess localstorage key on othe components ,no need to recve it as a prop 
//always use localstorage key and its value inside "" double quotes

