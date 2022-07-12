import React from "react";
import "./TextBox.scss";

/* 
  aplique esto en el componente TexBox porque si lo haces junto se descuadra todo, se encajona quien sabe porque
  y no pasa de los primeros centimetros del div en donde esta metido sin importar su tamaño
*/

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
