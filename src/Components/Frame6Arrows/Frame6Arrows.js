import React from 'react'
import Frame6Circle from "../../Assets/Frame6Circle.svg"
import Frame6Arrow1 from "../../Assets/Frame6Arrow1.svg"
import Metodologia1 from "../../Assets/Metodologia1.svg"
import Frame6Arrow2 from "../../Assets/Frame6Arrow2.svg"
import Metodologia2 from "../../Assets/Metodologia2.svg"
import Frame6Arrow3 from "../../Assets/Frame6Arrow3.svg"
import Metodologia3 from "../../Assets/Metodologia3.svg"
import Frame6Arrow4 from "../../Assets/Frame6Arrow4.svg"
import Metodologia4 from "../../Assets/Metodologia4.svg"
import './Frame6Arrows.scss'

const Frame6Arrows = () => {
  return (
    <div className='Total-Frame6Arrows-Container'>
        <div className='Frame6Arrows'>

            <img src={ Frame6Circle } className='Frame6Circle' alt='Frame6Circle' />

            <div className='Frame6Arrow1AndMetodologia1'>
              <img src={ Frame6Arrow1 } className='Frame6Arrow1' alt='Frame6Arrow1'/>
              <img src={ Metodologia1 } className='Metodologia1' alt='Metodologia1'/>
            </div>

            <div className='Frame6Arrow2AndMetodologia2'>
              <img src={ Frame6Arrow2 } className='Frame6Arrow2' alt='Frame6Arrow2'/>
              <img alt='Metodologia1'/>
            </div>

            <div className='Frame6Arrow3AndMetodologia3'>
              <img src={ Frame6Arrow3 } className='Frame6Arrow3' alt='Frame6Arrow3'/>
              <img alt='Metodologia1'/>
            </div>

            <div className='Frame6Arrow4AndMetodologia4'>
              <img src={ Frame6Arrow4 } className='Frame6Arrow4' alt='Frame6Arrow4'/>
              <img alt='Metodologia4'/>
            </div>
                
        </div>

    </div>
  )
}

export default Frame6Arrows