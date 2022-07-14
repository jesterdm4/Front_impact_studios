import React from 'react'
import "./Frame3.scss";
import TextBox2 from '../TextBox2/TextBox2';

const Frame3 = () => {
  return (
    <>
        <div className="total-Frame3-container">

            <div className='TextBox2-container'>
                <TextBox2 
                    isBlue={false}
                    isWhiteLetterded={false}
                    isTransfo={true}
                    isBlackShadow={false}
                    isBig={true}
                    text="NUESTRA PROPUESTA"
                />

            </div>

            <div className='divInterno'>

                <div className='texto2'>
                    Nuestra misión, es crear plataformas innovadoras, con tecnologias modernas, para potenciar y facilitar los flujos de trabajo y la satisfacción del usuario
                </div>

                    
                <div className='TextBox2-container'>
                    <TextBox2 
                        isBlue={true}
                        isWhiteLetterded={true}
                        isTransfo={false}
                        isBlackShadow={true}
                        isBig={false}
                        text="CLIC AQUI PARA VER ALGUNOS DE NUESTROS TRABAJOS"
                    />
                    
                </div>


            </div>

            <div className='texto3'>
                APPS NATIVAS / WEB RESPONSIVE
            </div>


        </div>


    </>
  )
}

export default Frame3