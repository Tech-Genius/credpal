import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Hero.module.css'
import hero from './assets/images/hero1.png'

// Default component rendered in the hero section
function Hero() {

    return (

        <div className={style.hero}>


            <div className={style.heroInner}>

                <div className={style.heroBox} id={style.text} data-aos="fade-right" data-aos-duration="1200">
                    <h3>One App, all your Financial Needs
                    </h3>
                    <p>Take control of your finances on the go! Make payments, save, invest, and access credit - all with one easy-to-use app.</p>
                   
                </div>


                <div className={style.heroBox} id={style.image} data-aos="fade-left" data-aos-duration="1200">
                    <img src={hero} alt="hero" />
                </div>

            </div>

        </div>

    )

}


export default Hero