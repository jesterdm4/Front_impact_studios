import React from 'react'
import TextBox2 from '../TextBox2/TextBox2';

import "./Frame7.scss";

const Frame7 = () => {
  return (
    <div className='Frame7-Total-Container'>
      <div className='TextBox2-Container'>
        <TextBox2 
          isBlue={true}
          isWhiteLetterded={true}
          isTransfo={true}
          isBlackShadow={true}
          isBig={true}
          text="LISTO PARA CONVERSAR?"
        />
      </div>

      <div className='UserData-Container'>
        <div className='Name-Container'></div>
        <div className='PhoneAndEmail-Container'> <div className='Phone-Container'></div> <div className='Email-Container'></div> </div>
        <div className='Message-Container'></div>
      </div>

      <div className='AdjuntarAndSend-Container'>
        <div className='Adjuntar-Container'></div>
        <div className='Send-Container'></div>
      </div>

    </div>
  )
}

export default Frame7