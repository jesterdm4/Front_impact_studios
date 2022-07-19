import React from 'react'
import Frame6Arrows from '../Frame6Arrows/Frame6Arrows';
import TextBox2 from '../TextBox2/TextBox2';
import "./Frame6.scss";

const Frame6 = () => {
  return (
    <div className='Total-Frame6-Container'>

        <div className='Frame6-GridBox1'>
            <div className='Frame6-TextBox-Container'>
                <TextBox2 
                        isBlue={true}
                        isWhiteLetterded={true}
                        isTransfo={true}
                        isBlackShadow={true}
                        isBig={true}
                        text="METODOLOGÍAS"
                />
            </div>
        </div>

        <div className='Frame6-GridBox2'>
            <div className='Frame6Arrows-Container'>
                <Frame6Arrows />            
                    
            </div>
        </div>

        <div className='Frame6-GridBox3'>
            <div className='Frame6-Metodologias'>
                <h6 className='Agile'>ÁGILE</h6>
                <h6 className='Scrum'>SCRUM</h6>
                <h6 className='Scrumban'>SCRUMBAN</h6>
                <h6 className='Design-thinking'>DESIGN THINKING</h6>
            </div>
        </div>

            <div className='Frame6-Text'>
                     <p>Nuestra misión, es crear plataformas 
                    innovadoras, con tecnologias modernas, 
                    para potenciar y facilitar los flujos de 
                    trabajo y la satisfacción del usuario</p>
            </div>  

{/* ESTE FRAME NO SE LOGRO */}

    </div>
  )
}

export default Frame6