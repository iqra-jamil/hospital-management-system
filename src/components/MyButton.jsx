import React from 'react';
import { Button, } from 'antd';
const MyButton = ({ onClickHandler, title }) => (
    <Button type="primary" onClick={onClickHandler}>{title}</Button>
);
export default MyButton;