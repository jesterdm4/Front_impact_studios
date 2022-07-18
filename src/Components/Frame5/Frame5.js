import React from 'react'
import BlueBox3 from '../BlueBox3/BlueBox3'
import "./Frame5.scss"

const Frame5 = () => {
  return (
    <div className='Total-Frame5-Container'>

        <div className='grid-layout2'>
            {/* hacer el grid de 50/50 y dezplazarlo a la izquierda? */}

            <div className='BlueBox3-Component-Container'>
                <BlueBox3 />
                {/*pendiente moificar adecuadamente el BlueBox de turno*/}
            </div>

            <div className='RedArrow2'>
                {/* importar aqui el svg de la flecha que se uso en el frame anterior */}
            </div>

            <div className='Frame5-text'>
                <div className='Frame5-text1'>CÓMO LO HACEMOS</div>
                <div className='Frame5-text2'>01. CONOCEMOS TU NECESIDAD TECNOLÓGICA</div>
                <div className='Frame5-text3'>02. ENTENDEMOS EL ALCANCE DE TU PROYECTO</div>
                <div className='Frame5-text4'>03. DISEÑAMOS LA EXPERIENCIA DE TUS USUARIOS</div>
            </div>

        </div>

    </div>
  )
}

export default Frame5