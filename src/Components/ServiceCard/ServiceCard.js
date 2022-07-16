import React from 'react'
import "./ServiceCard.scss"
import ServiceCard2 from "../../Assets/ServiceCard2.svg"
import ServiceCard3 from "../../Assets/ServiceCard3.svg"
import ServiceCard4 from "../../Assets/ServiceCard4.svg"
import ServiceCard5 from "../../Assets/ServiceCard5.svg"
import ServiceCard6 from "../../Assets/ServiceCard6.svg"


const ServiceCard = (props) => {

    const images = [<img src={ ServiceCard2 } className='ServiceCard2' />,
                    <img src={ ServiceCard3 } className='ServiceCard3' />,
                    <img src={ ServiceCard4 } className='ServiceCard4' />,
                    <img src={ ServiceCard5 } className='ServiceCard5' />,
                    <img src={ ServiceCard6 } className='ServiceCard6' />];

  return (
    <div className='ServiceCard-totalContainer'>
        
        {images[props.image]}     
        
    </div>
  )
}

export default ServiceCard