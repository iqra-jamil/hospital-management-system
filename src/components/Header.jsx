import React, { useContext } from 'react';
import { ThemeContext } from "./ThemeContext.jsx";
import { NavLink, useNavigate } from 'react-router-dom'
import Logout from './Logout'
import MyButton from './MyButton'
import { SunOutlined, SunFilled } from '@ant-design/icons';

const Header = ({ setisLoggedin }) => {
   //theme switch (useContext)
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  function handleNavigation() {
    navigate('/Appointment');
  }
  return (
    <div className={`header ${theme}`}>
      <div className='headerItems'>
        <NavLink to="/About" className={({ isActive }) => isActive ? "headerItemactive" : "headerItem"}>
          About us
        </NavLink>
        <NavLink to="/Services" className={({ isActive }) => isActive ? "headerItemactive" : "headerItem"}>
          Services
        </NavLink>
        <NavLink to="/Contact" className={({ isActive }) => isActive ? "headerItemactive" : "headerItem"}>
          Contact us
        </NavLink>
        <div className="btns">
          <Logout setisLoggedin={setisLoggedin} />
          <MyButton onClickHandler={handleNavigation} title="Book an Appointment" />
           {/* theme switch (useContext) */}
          <div onClick={toggleTheme} style={{ cursor: 'pointer', fontSize: '20px' }}>
            {theme === 'light' ? <SunOutlined /> : <SunFilled />}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;
