import React from "react";
import { Link } from "react-router-dom";

const MyButton = props => {
  return (
    <div className="my_link">
      <Link className="link_default" to={props.linkTo} {...props.addStyles}>
        {props.title}
      </Link>
    </div>
  );
};

export default MyButton;
