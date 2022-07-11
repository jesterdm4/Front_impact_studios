import React from 'react'
import "./BlueBox.scss";
import Vector1 from "../Vector1/Vector1.js";



const BlueBox = () => {
  
    return (
      <>
        <div className='BlueBox1'>


          <div className='BlueBox2y3'>
            <div className='BlueBox2'></div>
            <div className='BlueBox3'></div>
          </div>


            <div className='TextoBlanco'>
              Especialistas en el Desarrollado y Diseño de Software, para procesos de Transformación Digital y construcción de tecnologias emergentes
            </div>

          <div className='BlueBox4y5'>
            <div className='BlueBox4'></div>
            {/*<div className='ArrowComponent'><Vector1 /></div>*/}
            <div className='BlueBox5'></div>
          </div>

        </div>
      </>
    );
  };
  
  export default BlueBox;
  