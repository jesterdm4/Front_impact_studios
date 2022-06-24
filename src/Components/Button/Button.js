import React from "react";
import "./button.scss";

const Button = ({ as, ...props }) => {
  if (as === "label") {
    return (
      <label
        className={`${props.color ? `btn-${props.color}` : `btn-primary`}  ${
          props?.full ? `full` : ``
        }   `}
        {...props}
      >
        <div className="btn-content">
          {props?.icon ? <i>{props.icon}</i> : null}
          <p>{props.children}</p>
        </div>
      </label>
    );
  } else if (as === "link") {
    return (
      <a
        className={props.color ? `btn-${props.color}` : `btn-primary`}
        {...props}
      >
        <div className="btn-content">
          {props?.icon ? <i>{props.icon}</i> : null}
          <p>{props.children}</p>
        </div>
      </a>
    );
  }

  return (
    <button
      className={props.color ? `btn-${props.color}` : `btn-primary`}
      {...props}
    >
      <div className="btn-content">
        {props?.icon ? <i>{props.icon}</i> : null}
        <p>{props.children}</p>
      </div>
    </button>
  );
};

export default Button;
