import React from 'react'
import Adjuntar from '../Adjuntar/Adjuntar';
import Blobers from '../Blobers/Blobers';
import Send from '../Send/Send';
import TextBox2 from '../TextBox2/TextBox2';
import UserData from '../UserData/UserData';
import UserData2 from '../UserData2/UserData2';

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
        <div className='Name-Container'> <UserData Dato={"TU NOMBRE. . ."} /> </div>
        <div className='PhoneAndEmail-Container'> <div className='Phone-Container'> <UserData2 Dato={"TELÉFONO"}/> </div> <div className='Email-Container'> <UserData2 Dato={"EMAIL"}/> </div> </div>
        <div className='Message-Container'> <UserData Dato={"MENSAJE (OPCIONAL)"} /> </div>
      </div>

      <div className='AdjuntarAndSend-Container'>
        <div className='Adjuntar-Container'> <Adjuntar /> </div>
        <div className='Send-Container'> <Send /> </div>
      </div>

      <Blobers />

    </div>
  )
}

export default Frame7