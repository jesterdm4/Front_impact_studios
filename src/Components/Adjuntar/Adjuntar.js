import React from 'react'
import clip from "../../Assets/clip.svg"
import "./Adjuntar.scss"

const Adjuntar = () => {
  return (
    <div className='ClipAndAdjuntar'>
        <img src={ clip } className='clip' />
        <div className='TrueAdjuntar'> <p>ADJUNTAR DOCUMENTO DEL PROYECTO (OPCIONAL)</p> </div>
    </div>
  )
}

export default Adjuntar