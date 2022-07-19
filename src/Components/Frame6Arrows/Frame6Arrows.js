import React from 'react'
import Frame6Circle from "../../Assets/Frame6Circle.svg"
import Frame6Arrow1 from "../../Assets/Frame6Arrow1.svg"
import Frame6Arrow2 from "../../Assets/Frame6Arrow2.svg"
import Frame6Arrow3 from "../../Assets/Frame6Arrow3.svg"
import Frame6Arrow4 from "../../Assets/Frame6Arrow3.svg"
import './Frame6Arrows.scss'

const Frame6Arrows = () => {
  return (
    <div className='Total-Frame6Arrows-Container'>
        <div className='Frame6Arrows'>

            <img src={ Frame6Circle } className='Frame6Circle' />

            <img src={ Frame6Arrow1 } className='Frame6Arrow1' />

            <img src={ Frame6Arrow2 } className='Frame6Arrow2' />

            <img src={ Frame6Arrow3 } className='Frame6Arrow3' />

            <img src={ Frame6Arrow4 } className='Frame6Arrow4' />
                
        </div>

    </div>
  )
}

export default Frame6Arrows