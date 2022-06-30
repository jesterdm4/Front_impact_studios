import React from "react";
import "./TextBox.scss";

const TextBox = (props) => {
    return (
      <div className="TextBox">
        <>
            <p>{props.text}</p>
        </>
        <>
            <p>{props.text2}</p>
        </>
      </div>
    );
  };

export default TextBox;
