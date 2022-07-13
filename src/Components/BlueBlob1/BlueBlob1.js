import React from 'react';
import BlueBlob1Svg from '../../Assets/BlueBlob1Svg.svg';
import BlueBlob2Svg from '../../Assets/BlueBlob2Svg.svg';
import RedBlob1Svg from '../../Assets/RedBlob1Svg.svg';
import RedBlob2Svg from '../../Assets/RedBlob2Svg.svg';
import "./BlueBlob1.scss";


const BlueBlob1 = () => {
    return (
      <>
        <div className='BlueBlob1'>
          <img src={ BlueBlob1Svg } className='BlueBlob1Svg'></img>
        </div>

        <div className='BlueBlob2'>
          <img src={ BlueBlob2Svg } className='BlueBlob2Svg'></img>
        </div>

        <div className='RedBlob1'>
          <img src={ RedBlob1Svg } className='RedBlob1Svg'></img>
        </div>

        <div className='RedBlob2'>
          <img src={ RedBlob2Svg } className='RedBlob2Svg'></img>
        </div>

      </>
    );
  };
  
  export default BlueBlob1;
  