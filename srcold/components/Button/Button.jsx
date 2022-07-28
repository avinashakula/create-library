import React from "react";

const Button = (props) => {
  return <div>
    Following props coming from host
    <p>Name : {props.name}</p>
    <p>Email : {props.email}</p>
    <p>Country : {props.country}</p>
  </div>;
};

export default Button;