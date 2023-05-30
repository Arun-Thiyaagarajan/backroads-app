import React from 'react'
import Title from './Title'
import { tourCards } from '../data'

const Tour = () => {
  return (
    <>
        <section className="section" id="tours">

            <Title main={'featured'} span={'tours'} /> 

            <div className="section-center featured-center">

                {tourCards.map((tourCard) => {

                    const { id, img, date, title, country, days, price } = tourCard

                    return (
                        <article key={ id } className="tour-card">
                            <div className="tour-img-container">
                                <img src={ img } className="tour-img" alt="" />
                                <p className="tour-date">{ date }</p>
                            </div>
                          
                            <div className="tour-info">
                                <div className="tour-title">
                                    <h4>{ title }</h4>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                                    vitae tempore voluptatum maxime reprehenderit eum quod
                                    exercitationem fugit, qui corporis.
                                </p>
                                <div className="tour-footer">
                                    <p>
                                    <span><i className="fas fa-map"></i></span> { country }
                                    </p>
                                    <p>{ days } days</p>
                                    <p>from ${ price }</p>
                                </div>
                            </div>
                        </article>
                    );
                })}
                
            </div>
        </section>
    </>
  )
}

export default Tour