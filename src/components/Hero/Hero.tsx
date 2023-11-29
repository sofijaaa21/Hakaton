import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'
export const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>LAKO I JEDNOSTAVNO POSTAVI NOVI OGLAS</h2>
            <p> asfjhasfjika</p>
            <Link to={"/MakePost"}><div className='hero-left__button'><button >Postavi Oglas</button></div></Link>
            
        </div>
        <div className="hero-right">
            <img src="/" alt="/" />
        </div>
    </div>
  )
}
