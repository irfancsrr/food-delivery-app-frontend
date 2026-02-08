import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum in, beatae dolorem non optio cupiditate, quam sunt dicta dolores minima exercitationem ducimus totam aut asperiores inventore harum laudantium. Distinctio, libero.</p>
                <div className="footer-social-icons">
                    <a href="https://www.facebook.com/"><img src={assets.facebook_icon} alt="" /></a>
                    <a href="http://www.twitter.com/"><img src={assets.twitter_icon} alt="" /></a>
                    <a href="https://www.linkedin.com/in/irfan-khan-8a9ab4370/"><img src={assets.linkedin_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9026507859</li>
                    <li>irfancsrrsimt@gmail.com</li>
                </ul>
            </div>
           
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 &copy; irfancsrrsimt@gmail.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer