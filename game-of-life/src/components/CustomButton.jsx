import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CustomButton extends Component {
  state = {};
  render() {
    const {
      // addStyle,
      variant,
      text,
      icon,
      onClickEvent,
      showAlternate,
      disable = false,
      alternateText = "",
      alternateIcon = "",
    } = this.props;
    // Todo next: optional parameters
    return (
      <Button
        variant={variant}
        disabled={disable}
        onClick={onClickEvent}
        // className="custom-btn"
        // className={addStyle}
        size={variant === "primary" ? "lg" : ""}
      >
        {
          alternateText === "" ? (
            <div className="d-flex align-items-center">
              <FontAwesomeIcon className="m-2" icon={icon} />
              {text}
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                className="m-2"
                icon={showAlternate ? alternateIcon : icon}
              />
              {showAlternate ? alternateText : text}
            </div>
          )
          // : (
          //   <div className="d-flex align-items-center">
          //     <FontAwesomeIcon className="m-2" icon={icon} />
          //     {text}
          //   </div>
          // )
          // <div className="d-flex align-items-center">
          //   <FontAwesomeIcon className="m-2" icon={icon} />
          //   {text}
          // </div>
        }
        {/* <div className="d-flex align-items-center">
            <FontAwesomeIcon className="m-2" icon={icon} />
            {text}
          </div> */}
      </Button>
    );
  }
}

export default CustomButton;
