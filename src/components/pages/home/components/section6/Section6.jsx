import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Section6.module.css'
import Section6 from './assets/images/section6.png'

// Default component rendered in the Section6 section
function SectionSix() {

    return (
        <div className={style.Section6}>

            <div className={style.Section6Inner}>



                <div className={style.Section6Box} id={style.text} data-aos="fade-right" data-aos-duration="1200">
                    <h3>Visualize Your <span>Data</span> In Real <span>Time</span>.</h3>
                
                   <p>Simply Tramsform Data Into Meaningful Information.</p>
                <p>Identify trends in your data and compare key performance indicators (KPIs) using built-in dashboards. Use filters to interactively isolate and analyze specific subsets of data and segments of your business. </p>
                </div>


                <div className={style.Section6Box} id={style.image} data-aos="fade-left" data-aos-duration="1200">
                    <img src={Section6} alt="" />
                </div>

            </div>

        </div>

    )

}


export default SectionSix