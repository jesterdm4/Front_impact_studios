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
        <>
            <p>{props.text3}</p>
        </>
        <>
            <p>{props.text4}</p>
        </>
        <>
            <p>{props.text5}</p>
        </>
      </div>
    );
  };

export default TextBox;
