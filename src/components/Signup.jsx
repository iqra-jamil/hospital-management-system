import React from "react";
import { Form, Input, Button, Select } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import logo from "./logo.png";

const Signup = ({ setuserDatastate }) => {
  let users = JSON.parse(localStorage.getItem("userdata")) || [];
  let navigate = useNavigate();
  const provinces = [{ label: "Punjab", value: "Punjab" }, { label: "Sindh", value: "Sindh" }, { label: "Khyber Pakhtunkhwa", value: "Khyber Pakhtunkhwa" }, { label: "Balochistan", value: "Balochistan" }];
  const genders = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" }
  ];
  const onFinish = (values) => {
    let userFound = users.find((user) => user.empID === values.empID);
    if (!userFound) {
      users.push({
        empID: values.empID,
        password: values.password,
        Firstname: values.Firstname,
        fatherhusbandname: values.fatherhusbandname,
        Gender: values.Gender,
        DOB: values.DOB,
        age: values.age,
        City: values.City,
        province: values.province,
      });
      localStorage.setItem("userdata", JSON.stringify(users));
      setuserDatastate(users);
      alert("Account created successfully, Login to your account");
      navigate("/");
    } else {
      alert("User already exists, please login or use a different ID.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="SignupContainer">
      <div className="Signup">
        <div className="logo-wrapper">
          <div className="logo-circle">
            <img src={logo} className="logo-img" alt="logo" />
          </div>
        </div>

        <h1 className="englishheading">Shifa international Hospitals Ltd.</h1>
        <h1 className="urduheading">شفا انٹرنیشنل ہسپتال لمیٹڈ</h1>

        <Form layout="vertical" autoComplete="off" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <div className="divOne">
            <Form.Item
              label="First name"
              name="Firstname"
              rules={[{ required: true, message: "First name is required" }]}
            >
              <Input type="text" placeholder="John" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              label="Emp ID"
              name="empID"
              rules={[{ required: true, message: "Emp ID is required" }]}
            >
              <Input type="text" placeholder="Enter Employee ID" />
            </Form.Item>
          </div>

          <div className="divTwo">
            <Form.Item
              label="Father/husband name"
              name="fatherhusbandname"
              rules={[{ required: true, message: "The field is required" }]}
            >
              <Input type="text" placeholder="Doe" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item className="sideField"
              label="Gender"
              name="Gender"
              rules={[{ required: true, message: "Select one from the dropdown" }]}
            >
              {/* <Select>
                <Select.Option value="Male">Male</Select.Option>
                <Select.Option value="Female">Female</Select.Option>
              </Select> */}
              <Select placeholder='Gender' options={genders} />
            </Form.Item>
          </div>

          <Form.Item
            label="DOB"
            name="DOB"
            rules={[{ required: true, message: "Enter your DOB" }]}
          >
            <Input type="date" />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: "Enter your age" }]}
          >
            <Input type="number" min="18" max="99" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password placeholder="Enter Password" prefix={<LockOutlined />} />
          </Form.Item>

          <div className="divThree">
            <Form.Item
              label="City"
              name="City"
              rules={[{ required: true, message: "City is required" }]}
            >
              <Input type="text" placeholder="City" />
            </Form.Item>

            <Form.Item className="sideField"
              label="Province"
              name="province"
              rules={[{ required: true, message: "Select one from the dropdown" }]}
            >
              <Select options={provinces} placeholder='provinces' />
            </Form.Item>
          </div>
          <Button type="primary" htmlType="submit" className="submitBtn">
            Register
          </Button>
          <p>
            Already have an account? <NavLink to="/">Login</NavLink>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
// while using ant design form
// remove all useStates
//removed all value and onChange props
//use values.fieldname instead


// if localstorage say data ko kisi dusray componet main srf read(get) krna ha  to we have to need to set it agin
// lkn agr hum ny array main ya localstrorage m koi modification krni h to us ko again set krna ho ga
// Ant Design Select passes the selected value directly to onChange, not an event object, so there is no target.value.