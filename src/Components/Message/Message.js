import React from "react";
import PropTypes from "prop-types";
import "./Message.css";

/**
 * General component description in JSDoc format. Markdown is *supported*. <Message />
 *
 * ```jsx
 * <Message></Message>
 * ```
 */
const Message = (props) => {
  return (
    <div className="message">
      <p> {props.message} </p>
    </div>
  );
};

Message.propTypes = {
  /** A message to show */
  message: PropTypes.string
};
Message.defaultProps = {
  message: "Some Message"
}

export default Message;
