import React from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
library.add(faShoppingBag);
const MyButton = (props) => {
  const buttons = () => {
    let template = "";
    switch (props.type) {
      case "default":
        template = (
          <Link
            className={!props.altClass ? "link_default" : props.altClass}
            to={props.linkTo}
            {...props.addStyles}
          >
            {props.title}
          </Link>
        );
        break;
      case "bag_link":
        template = (
          <div
            className="bag_link"
            onClick={() => {
              props.runAction();
            }}
          >
            <FontAwesomeIcon icon="shopping-bag" />
          </div>
        );
        break;
      default:
        template = "";
    }
    return template;
  };
  return <div className="my_link">{buttons()}</div>;
};

export default MyButton;
