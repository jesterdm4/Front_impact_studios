import React from 'react'
import BlueBox2 from '../BlueBox2/BlueBox2'
import ServiceCard from '../ServiceCard/ServiceCard'
import "./Frame4.scss"

const Frame4 = () => {
  return (
    <div className='total-Frame4-container'>
    
        <div className='grid-layout'>

          <div className='box c1'>
            <BlueBox2 />
          </div>
        
          <div className='box c2'>
            <ServiceCard 
              image='0'
            />
          </div>
        
          <div className='box c3'>
            <ServiceCard
              image='1'
            /> 
          </div>
        
          <div className='box c4'>
            <ServiceCard 
              image='2'
            /> 
          </div>
        
          <div className='box c5'>
            <ServiceCard 
              image='3'
            /> 
          </div>
        
          <div className='box c6'>
            <ServiceCard 
              image='4'
            /> 
          </div>
        
        </div>

    </div>
  )
}

export default Frame4