import "./TextBox2.scss";
import React from 'react'

const TextBox2 = ({text, isBlue, isWhiteLetterded, isTransfo, isBlackShadow, isBig}) => {
  
  return (
    <div className={`TextBox2  ${isBlue?"blue-back":"white-back"}  ${isWhiteLetterded?"white-Letterded":"non-white-Letterded"}  ${isTransfo?"transfo":"non-transfo"}  ${isBlackShadow?"black-shadow":"non-black-shadow"}  ${isBig?"big":"small"}`}>
        

          {text}


    </div>
  )
}

export default TextBox2
