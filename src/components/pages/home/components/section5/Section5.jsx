import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Section5.module.css'
import { MdPhonelink } from "react-icons/md";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
// Default component rendered in the Section3 section
function SectionFive() {

    return (
        <div className={style.Section5}>

            <div className={style.Section5Intro}>
                <h3>Forms Just Got <span>Easier!</span></h3>
                
            </div>
            

            <div className={style.Section5Inner}>


                <div className={style.Section5Box} id={style.text} data-aos="fade-up" data-aos-duration="1200">
                    <MdPhonelink className={style.Section5BoxIcon} />
                    <p>Supports any device, platform and network.</p>
                </div>



                <div className={style.Section5Box} id={style.text} data-aos="fade-up" data-aos-duration="1200">
                    <BsFillCloudArrowUpFill className={style.Section5BoxIcon} />
                    <p>Cloud based & secure, no hardware required.</p>
                </div>



                <div className={style.Section5Box} id={style.text} data-aos="fade-up" data-aos-duration="1200">
                    <GiNetworkBars className={style.Section5BoxIcon} />
                    <p>Works offline on any mobile data or network.</p>
                </div>

            </div>

        </div>

    )

}


export default SectionFive