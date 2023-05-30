import React from 'react'
import Title from './Title'
import { services } from '../data'
import Services from './Services'
const Service = () => {
  return (
    <>
        <section className="section services" id="services">

            <Title main={'our'} span={'service'} />
            
            <div className="section-center services-center">

                {services.map((service) => 
                    <Services key={service.id} {...service}/>                
                )}

            </div>
        </section>
    </>
  )
}

export default Service