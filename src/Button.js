import React from "react";
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

const Button = ({ handleClick }) => {
  const state = useSelector((state) => state);
  const history = useHistory();

  const handleClick2 = () => {
    history.push("/postbox");
    handleClick();
  };

  console.log(state);
  return <button onClick={handleClick2}>LOG GLOBAL STATE</button>;
};

export default Button;
