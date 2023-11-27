import React from 'react'
import "./Footer.css"
export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-feedback">
            <div className="footer-feedback__text">
                <h2>Saznajte prvi</h2>
                <h2> za popuste i akcije!</h2>
            </div>
            <div className="footer-feedback__input">
                <input type="text" placeholder='Upisi svoj email'/>
            </div>
            <div className="footer-feedback__button">
                <button>Posalji</button>
            </div>
            
        </div>
        <div className="footer-copyright-content">
            ThriftShop © 2023
        </div>
    </div>
  )
}
