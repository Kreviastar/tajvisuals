import React from 'react'
import './Services.css'
import { FaRegLightbulb } from 'react-icons/fa'
import { GiPencilBrush } from 'react-icons/gi'
import { TbKeyframes } from 'react-icons/tb'

const Services = () => {
  return (
      <section >
              <div className="container Services__container" id='services'>
             <div className="top-services-section">
                 <h1>Services</h1>
                 <button  className='btn btn-primary' ><a href="#projects" >View All Projects</a></button>

             </div>
             <div className="bottom-services-section">
               
                 <article className="service">
                     <span> <FaRegLightbulb className='icon' /></span>
                     <h3>Logo Design</h3>
                     <p>
                        I bring ideas to life with creative designs that make brands stand out. 
                     </p>
                 </article>
                 <article className="service">
                     <span><GiPencilBrush />  </span>
                     <h3>Flyer Design</h3>
                     <p>
                        Flyers tailored to your needs, crafted to captivate and inform your audience effectively.
                     </p>
                 </article>
                 <article className="service">
                     <span><TbKeyframes />  </span>
                     <h3>Motion Graphics</h3>
                     <p>
                        Engaging motion graphics that bring your stories to life and captivate your audience.
                     </p>
                 </article>
                 
         
             </div>
          </div>
      </section>
    
  )
}

export default Services