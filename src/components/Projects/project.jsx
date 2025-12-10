import React from 'react'
import './project.css'
import { assets } from '../../assets/assets'

const project = () => {
  return (
     <section id='projects' className='Projects'>
         <div className="container Projects__container">
             <h1>MY PROJECTS</h1>
             <div className="Projects_word">
                   <article>
                         <img src={assets.Project1} alt="" />
                   </article>
                   <article>
                         <img src={assets.project4} alt="" />
                   </article>
                   <article>
                         <img src={assets.project3} alt="" />
                   </article>
             </div>
         </div>
     </section>
  )
}

export default project