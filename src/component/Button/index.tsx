import React from "react";
import { ButtonProps } from "./interface";
import './style.css';

const Button: React.FC<ButtonProps> = ({ type = "default", children }) => {
	
	return <button className={type}>{children}</button>;
};

export default Button;
