import React from "react";

const Button = ({ text, func, icon }) => {
  return (
    <button className="btn-primary" onClick={func}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
