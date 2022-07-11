import React from 'react'
import "./Vector1.scss";
import VectorSvg from '../../Assets/VectorSvg.svg';


const Vector1 = () => {
    return (
      <>
        <div className='fullArrow'>
            
            <div className='arrow'>
                <div className='elipse'></div>
                <img className='VectorSvg' 
                    src={VectorSvg} 
                    alt='VectorSvg' 
                />
            </div>
        </div>
      </>
    );
  };
  
  export default Vector1;
  