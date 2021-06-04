import React from 'react';
import './button.scss';

const Button = (props) => {
  return (
    <>
      {props?.as ? (
        props?.as==='label'?
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
        </label>:
        <a className={props.color ? `btn-${props.color}` : `btn-primary`} {...props}>
          <div className="btn-content">
            {props?.icon ? <i>{props.icon}</i> : null}
            <p>{props.children}</p>
          </div>
        </a>
      ) : (
        <button className={props.color ? `btn-${props.color}` : `btn-primary`} {...props}>
          <div className="btn-content">
            {props?.icon ? <i>{props.icon}</i> : null}
            <p>{props.children}</p>
          </div>
        </button>
      )}
    </>
  );
};

export default Button;
