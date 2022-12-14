import React from 'react'
import "./BlueBox3.scss"
import OldMonitor from "../../Assets/OldMonitor.svg";

const BlueBox3 = () => {
  return (
    <div className='BlueBox3-Container'>
        <div className='corner1and2'>
            <div className='corner1'></div>
            <div className='corner2'></div>
        </div>

        <div className='BlueBox3-Content'>
            <img src={ OldMonitor } className='OldMonitor' />
        </div>

        <div className='corner3and4'>
            <div className='corner3'></div>
            <div className='corner4'></div>
        </div>
    </div>
  )
}

export default BlueBox3