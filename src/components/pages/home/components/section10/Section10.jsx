import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Section10.module.css'
import Section10 from './assets/images/section10.png'


// Default component rendered in the Section10 section
function SectionTen() {

    return (

        <div className={style.Section10}>

            <div className={style.Section10Inner}>


                <div className={style.Section10Box} id={style.image} data-aos="fade-right" data-aos-duration="1200">
                    <img src={Section10} alt="" />
                </div>


                <div className={style.Section10Box} id={style.text} data-aos="fade-left" data-aos-duration="1200">
                    <h3>Integrate With SmatForms <span>Today!</span></h3>
             
                    <p> <span>• </span>Free training, support and implementation</p>
                    <p> <span>• </span>Access to entire platform </p>
                    <p> <span>• </span>A free proof of concept </p>
                    <p> <span>• </span>Dedicated customer success consultant </p>
                    <p> <span>• </span>Help with migrating forms over to SmatForms </p>
                    <Link to={'/pricing'} className={style.Section10Link}><button data-aos="fade-up" data-aos-duration="1200">Get Started</button></Link>
               
                </div>

            </div>

        </div>

    )

}


export default SectionTen