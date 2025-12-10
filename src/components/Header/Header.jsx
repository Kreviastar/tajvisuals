import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets.js'

const Header = () => {
  return (
     <header>
  <div className="container header__container">
    <div className="header__left">
  
      <h1>Visual Designer </h1>
      <h1>Based in Nigeria</h1>
      <p>
     
        I am Adegboyega Iyanuoluwa. I create high-quality flyers, logos,
        posters, and brand materials designed to communicate clearly and stand
        out instantly.
      </p>
      <div className="buttons">
        <button className="btn btn-primary download"  ><a href="tajvisuals01@gmail.com" target='--blank'>Get in touch</a></button>
        <button className="btn btn-primary ">Download Cv</button>
      </div>
    </div>
    
    <div className="header__right">
      <img src={assets.FIGHTER} alt="" />
    </div>

  </div>
</header>

  )
}

export default Header