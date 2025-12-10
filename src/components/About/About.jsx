import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'

const About = () => {
  return (
         <header id='about'>
              <div className="container about__container">
                   <div className="about__left">
                       <h3>About Me</h3>
                       <p>
                        Hi, I’m Adegboyeba Iyanuoluwa, the creative mind behind Tag Visuals. I specialize in bringing ideas to life through logo design,
                         flyers, posters, motion graphics, and video editing. 
                         My goal is to craft visuals that not only look amazing but also communicate your message effectively.
                       </p>
                   </div>
                   <div className="about__right">
                      <img src={assets.Adegboyega} alt="" />
                   </div>
              </div>
         </header>
  )
}

export default About