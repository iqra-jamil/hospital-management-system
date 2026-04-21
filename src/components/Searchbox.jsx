import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Searchbox = (props) => {
  return (
   
      <div className="searchBox">
        <Input placeholder="Enter Patient Name" prefix={<SearchOutlined />} value={props.value} onChange={(e)=>props.onChange(e.target.value)}/>
      </div>
  
  );
};
export default Searchbox;
