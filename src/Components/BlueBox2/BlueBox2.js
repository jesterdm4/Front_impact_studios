import React from 'react'
import "./BlueBox2.scss"
import BlueText1 from "../../Assets/BlueText1.svg"
import LoremText from "../../Assets/LoremText.svg"
import RedArrow from "../../Assets/RedArrow.svg"

const BlueBox2 = () => {
  return (
    <div className='BlueBox2-Container'>
        <div className='corner1and2'>
            <div className='corner1'></div>
            <div className='corner2'></div>
        </div>

        <div className='BlueBox2-Content'>
            <div className='BlueText1'>
                <img src={ BlueText1 } className='BlueText1' />
            </div>
            <div className='LoremText'>
                <img src={ LoremText } className='LoremText' />
            </div>
            <div className='RedArrow'>
                <img src={ RedArrow } className='RedArrow' />
            </div>
        </div>

        <div className='corner3and4'>
            <div className='corner3'></div>
            <div className='corner4'></div>
        </div>
    </div>
  )
}

export default BlueBox2