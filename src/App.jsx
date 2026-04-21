// import it
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup.jsx";
import Btns from "./components/Btns.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Applayout from "./pages/layout/Applayout.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/services.jsx";
import Authlayout from "./components/Authlayout.jsx";
import Contact from "./pages/Contact.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import { useState } from "react";
import Allergies from './sidebarpages/Allergies';
import DoctorNotes from './sidebarpages/DoctorNotes';
import Madication from './sidebarpages/Madication';
import Neuroligy from './sidebarpages/Neuroligy';
import Nursing from './sidebarpages/Nursing';
import Patientlist from './sidebarpages/Patientlist';
import Users from './sidebarpages/Users';
import TraigeIn from './sidebarpages/TraigeIn';
import Vitals from './sidebarpages/Vitals';
import UsersNew from "./pages/UsersNew.jsx";
import PatientsNew from "./pages/PatientsNew.jsx";
import DoctorsNew from './pages/DoctorsNew';
import Appointment from "./components/Appointment/Appointment.jsx";
import Appointmentlist from "./pages/Appointmentlist.jsx";
import Useimperativehook from "./pages/Useimperativehook";

// import UseRefComponent from "./components/UseRefComponent.jsx";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./components/ThemeContext.jsx";
function App() {
  const [isLoggedin, setisLoggedin] = useState(false);
   //theme switch (useContext)
  const { theme } = useContext(ThemeContext);
  const [patientDatastate, setpatientDatastate] = useState(() => {
    const savedData = localStorage.getItem('data'); return savedData ? JSON.parse(savedData) : [];
  });

  const [userDatastate, setuserDatastate] = useState(() => {
    const savedData = localStorage.getItem('userdata');
    return savedData ? JSON.parse(savedData) : [];
  });
  //theme switch (useContext)
  useEffect(() => {
     document.body.className = theme; 
    }, [theme]);

  let router = createBrowserRouter([
    {
      path: "",
      element: <Authlayout />,
      children: [
        // {
        //   path: "/",
        //   element: <Btns />,
        // },
        {
          path: "/",
          element: <Login setisLoggedin={setisLoggedin} />,
        },
        {
          path: "Signup",
          element: <Signup setuserDatastate={setuserDatastate} />,
        },

      ]
    },
    {
      path: "",
      element: <Applayout userDatastate={userDatastate} setuserDatastate={setuserDatastate} patientDatastate={patientDatastate} setpatientDatastate={setpatientDatastate} setisLoggedin={setisLoggedin} />,
      children: [
        {
          path: "Dashboard",
          element: <PrivateRoute isLoggedin={isLoggedin}><Dashboard /></PrivateRoute>,
        },
        {
          path: "About",
          element: <PrivateRoute isLoggedin={isLoggedin}><About /></PrivateRoute>,
        },
        {
          path: "services",
          element: <PrivateRoute isLoggedin={isLoggedin}><Services /></PrivateRoute>,
        },
        {
          path: "contact",
          element: <PrivateRoute isLoggedin={isLoggedin}><Contact /></PrivateRoute>,
        },
        {
          path: "Allergies",
          element: <PrivateRoute isLoggedin={isLoggedin}><Allergies /></PrivateRoute>,
        },
        {
          path: "DoctorNotes",
          element: <PrivateRoute isLoggedin={isLoggedin}><DoctorNotes /></PrivateRoute>,
        },
        {
          path: "Madication",
          element: <PrivateRoute isLoggedin={isLoggedin}><Madication /></PrivateRoute>,
        },
        {
          path: "Neuroligy",
          element: <PrivateRoute isLoggedin={isLoggedin}><Neuroligy /></PrivateRoute>,
        },
        {
          path: "Nursing",
          element: <PrivateRoute isLoggedin={isLoggedin}><Nursing /></PrivateRoute>,
        },
        {
          path: "Patientlist",
          element: <PrivateRoute isLoggedin={isLoggedin}><Patientlist patientDatastate={patientDatastate} setpatientDatastate={setpatientDatastate} /></PrivateRoute>,
        },
        {
          path: "Users",
          element: <PrivateRoute isLoggedin={isLoggedin}><Users userDatastate={userDatastate} setuserDatastate={setuserDatastate} /></PrivateRoute>,
        },
        {
          path: "TraigeIn",
          element: <PrivateRoute isLoggedin={isLoggedin}><TraigeIn /></PrivateRoute>,
        },
        {
          path: "Vitals",
          element: <PrivateRoute isLoggedin={isLoggedin}><Vitals /></PrivateRoute>,
        },
        {
          path: "UsersNew",
          element: <PrivateRoute isLoggedin={isLoggedin}><UsersNew /></PrivateRoute>,
        },
        {
          path: "PatientsNew",
          element: <PrivateRoute isLoggedin={isLoggedin}><PatientsNew /></PrivateRoute>,
        },
        {
          path: "DoctorsNew",
          element: <PrivateRoute isLoggedin={isLoggedin}><DoctorsNew /></PrivateRoute>,
        },
        {
          path: "Appointment",
          element: <PrivateRoute isLoggedin={isLoggedin}><Appointment /></PrivateRoute>,
        },
        {
          path: "Appointmentlist",
          element: <PrivateRoute isLoggedin={isLoggedin}><Appointmentlist /></PrivateRoute>,
        },
           {
          path: "Useimperativehook",
          element: <PrivateRoute isLoggedin={isLoggedin}><Useimperativehook/></PrivateRoute>,
        },
        {
          path: "patient/:mrno",
          element: <PrivateRoute isLoggedin={isLoggedin}><PatientsNew /></PrivateRoute>
        },
        {
          path: '/Users/:empId',
          element: <PrivateRoute isLoggedin={isLoggedin}><UsersNew /></PrivateRoute>
        }

      ]
    }

  ]);
  return (
    <>
      <div className={theme === "dark" ? "dark-theme" : ""}>
        <RouterProvider router={router} />
        {/* <UseRefComponent/> */}
      </div>

    </>
  );
}

export default App;

//website:react icons
//how to use icons in react js 
//install it ....> npm install react-icons
//import icon....> e.g., import { FaBeer } from "react-icons/fa";
//render it like a component <FaBeer/>



