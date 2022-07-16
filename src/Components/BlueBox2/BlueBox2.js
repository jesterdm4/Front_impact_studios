import React from 'react'
import "./BlueBox2.scss";


const BlueBox2 = (props) => {
  
    return (
      <>
        <div className='BlueBox1'>


          <div className='BlueBox2y3'>
            <div className='BlueBox2'></div>
            <div className='BlueBox3'></div>
          </div>

            {/*hacer de un tamaño determinado el ancho de el componente para que sea del mismo tamaño que los otros en la cuadrilla
            parece ser un problema de grid, ver el tuto que te paso J.O.S.E */}
            <div className='TextoBlanco'>
              <p>{props.text}</p>
            </div>

          <div className='BlueBox4y5'>
            <div className='BlueBox4'></div>
            <div className='BlueBox5'></div>
          </div>

        </div>
      </>
    );
  };
  
  export default BlueBox2;
  