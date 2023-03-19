import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Section9.module.css'
import Section9 from './assets/images/section9.png'


// Default component rendered in the Section9 section
function SectionNine() {

    return (
        <div className={style.Section9}>

            <div className={style.Section9Inner}>



                <div className={style.Section9Box} id={style.text} data-aos="fade-right" data-aos-duration="1200">
                    <h3>Convert Any <span>Paper</span> Form To a Mobile <span>Application</span>.</h3>
                  
                    <p><span>•</span> With SmatForms, you can quickly and easily convert paper forms into mobile applications. </p>
                    <p><span>•</span> Our intuitive web-based platform helps you design and deploy customized forms with no coding or special technical knowledge required. </p>
                    <p><span>•</span> Create interactive forms with drag-and-drop ease, add signature fields, and use powerful automation capabilities to make data collection faster and more.</p>
                    <p><span>•</span> Push files and data entries to systems like sage, SharePoint and more. Generate word, excel and PDF outputs with our powerful data templates functionality.</p>
                </div>


                <div className={style.Section9Box} id={style.image} data-aos="fade-left" data-aos-duration="1200">
                    <img src={Section9} alt="" />
                </div>

            </div>

        </div>

    )

}


export default SectionNine