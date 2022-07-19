import React from 'react'
import Rectangle1 from "../../Assets/Rectangle1.svg"
import Rectangle2 from "../../Assets/Rectangle2.svg"
import Rectangle3 from "../../Assets/Rectangle3.svg"
import Rectangle4 from "../../Assets/Rectangle4.svg"
import Rectangle5 from "../../Assets/Rectangle5.svg"
import Rectangle6 from "../../Assets/Rectangle6.svg"

import "./Frame5Blobs.scss"

const Frame5Blobs = () => {
  return (
    <div className='Rectangles-Container'>

        <img src={ Rectangle1 } className='Rectangle1' />

        <img src={ Rectangle2 } className='Rectangle2' />

        <img src={ Rectangle3 } className='Rectangle3' />

        <img src={ Rectangle4 } className='Rectangle4' />

        <img src={ Rectangle5 } className='Rectangle5' />

        <img src={ Rectangle6 } className='Rectangle6' />
    </div>
  )
}

export default Frame5Blobs