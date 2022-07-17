import React from 'react'
import "./Frame4Blobs.scss"
import Frame4BlueBlob1 from "../../Assets/Frame4BlueBlob1.svg"
import Frame4BlueBlob2 from "../../Assets/Frame4BlueBlob2.svg"
import Frame4RedBlob1 from "../../Assets/Frame4RedBlob1.svg"
import Frame4RedBlob2 from "../../Assets/Frame4RedBlob2.svg"

const Frame4Blobs = () => {
  return (
    <div className='Frame4Blobs-Container'>
        <div className='Frame4BlueBlob1'>
            <img src={ Frame4BlueBlob1 } className='Frame4BlueBlob1' />
        </div>
        <div className='Frame4BlueBlob2'>
            <img src={ Frame4BlueBlob2 } className='Frame4BlueBlob2' />
        </div>
        <div className='Frame4RedBlob1'>
            <img src={ Frame4RedBlob1 } className='Frame4RedBlob1' />
        </div>
        <div className='Frame4RedBlob2'>
            <img src={ Frame4RedBlob2 } className='Frame4RedBlob2' />
        </div>
    </div>
  )
}

export default Frame4Blobs