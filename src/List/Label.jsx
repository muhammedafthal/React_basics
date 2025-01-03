import React, { useContext } from "react";
import "./Label.css";
import { MyContext } from "./List";

//CLASS COMPONENT
function Label(props) {
  const val = useContext(MyContext);
  const style = props.isActive
    ? { background: "green" }
    : { background: "orange" };

  if (val === false) {
    return null;
  }

  return (
    <span className="list-label-item" style={style}>
      {props.isActive ? "Active" : "Non Active"}
    </span>
  );
}

export default Label;
