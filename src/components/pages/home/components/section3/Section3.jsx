import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Section3.module.css'
import Section3 from './assets/images/section3.png'
import ButtonLink from "../../../../button/ButtonLink";


// Default component rendered in the Section3 section
function SectionThree() {

    return (
        <div className={style.Section3}>

            <div className={style.Section3Inner}>



                <div className={style.Section3Box} id={style.text} data-aos="fade-right" data-aos-duration="1200">
                    <h3>Start building your credit score today</h3>
                    <p>Download our app to get started on your credit journey in Africa. Make the first move towards a better financial future today.</p>

                    <ButtonLink text={'Download App'} />
                </div>



            </div>

        </div>

    )

}


export default SectionThree