import React from "react";
import { Form, Input, Button } from "antd";
import { useNavigate, NavLink } from "react-router-dom";
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import logo from "./logo.png";

const Login = ({ setisLoggedin }) => {
  const navigate = useNavigate();
  let users = JSON.parse(localStorage.getItem("userdata")) || [];

  const onFinish = (values) => {
    let userFound = users.find(
      (item) => item.empID === values.empID && item.password === values.password
    ); 


    if (userFound) {
      localStorage.setItem("acessToken", "true");
      setisLoggedin(true);
      navigate("/Dashboard");
    } else {
      alert("User does not exist, please check your Employee ID and password or sign up.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="loginContainer">
      <div className="Loginform">
        <div className="logo-wrapper">
          <div className="logo-circle">
            <img src={logo} className="logo-img" alt="logo" />
          </div>
        </div>
        <h1 className="englishheading">Shifa international Hospitals Ltd.</h1>
        <h1 className="urduheading">شفا انٹرنیشنل ہسپتال لمیٹڈ</h1>

        <Form layout="vertical" autoComplete="off" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            label="Emp Id"
            name="empID"
            rules={[{ required: true, message: "Employee ID is required" }]}
          >
            <Input type="text" placeholder="Enter Employee Id" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password field is required" }]}
          >
            <Input.Password type="password" placeholder="Enter your password" prefix={<LockOutlined />} />
          </Form.Item>

          <p className="forgotpara">Forgot Password ?</p>

          <Button type="primary" htmlType="submit" className="submitBtn" icon={<LoginOutlined />}>
            Login
          </Button>

          <p>Don’t have an account? <NavLink to="/Signup">Sign Up</NavLink></p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
