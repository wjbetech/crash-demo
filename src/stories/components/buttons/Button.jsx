import "./button.css";

import PropTypes from "prop-types";
import React from "react";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, border, backgroundColor, size, label, ...props }) => {

  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const setBorder = border === "on"
    ? "storybook-button--border"
    : "" 

  return (
    <button
      type="button"
      // storybook-button passes basic button styles
      // storybook-button--size passes sizign
      // mode passes primary or secondary styles
      className={["storybook-button", `storybook-button--${size}`, mode, setBorder].join(
        " ",
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  
  // boolean border
  border: PropTypes.oneOf(["on", "off"]),
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
  border: false,
};
