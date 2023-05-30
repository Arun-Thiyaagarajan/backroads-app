import React from 'react'

const Services = ({ id, icon, title }) => {
        
    return (
        <>
            <article key={ id } className="service">
            
                <span className="service-icon"><i className={ icon }></i></span>

                <div className="service-info">
                    <h4 className="service-title">{ title }</h4>
                    <p className="service-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, officia.
                    </p>
                </div>
            
            </article>
        </>
    )
}

export default Services