import React from 'react'
import { Outlet } from 'react-router-dom'
const Authlayout = () => {
  return (
    <div className='auth-container'>
        <Outlet/>
    </div>
  )
}

export default Authlayout


