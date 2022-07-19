import React from 'react'
import BlueBox3 from '../BlueBox3/BlueBox3'
import RedArrow from "../../Assets/RedArrow.svg"
import Frame5Blobs from "../Frame5Blobs/Frame5Blobs";
import "./Frame5.scss"

const Frame5 = () => {
  return (
    <div className='Total-Frame5-Container'>

        <div className='Frame5Blobs-Container'>
            <Frame5Blobs />
        </div>

        <div className='grid-layout2'>

            <div className='BlueBox3-Component-Container'>
                <BlueBox3 />
            </div>

            <div className='Frame5-textAndArrow'>
                <div className='RedArrow2'>
                    <img src={ RedArrow } className='RedArrow' />
                </div>

                <div className='Frame5-Text'>
                    <div className='Frame5-text1'>CÓMO LO HACEMOS</div>
                    <div className='Frame5-text2'>01. CONOCEMOS TU NECESIDAD TECNOLÓGICA</div>
                    <div className='Frame5-text3'>02. ENTENDEMOS EL ALCANCE DE TU PROYECTO</div>
                    <div className='Frame5-text4'>03. DISEÑAMOS LA EXPERIENCIA DE TUS USUARIOS</div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Frame5