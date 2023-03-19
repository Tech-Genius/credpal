import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Section1.module.css'
import Section1 from './assets/images/section1.png'
import { SectionOneData } from "./data/Section1Data";
import ButtonLink from "../../../../button/ButtonLink";

// Default component rendered in the Section1 section
function SectionOne() {

    return (


        <div className={style.Section1} id="section1">
     {
                    SectionOneData.map((data, index) => (
            <div className={style.Section1Inner}>


           
                        <>
                            <div className={style.Section1Box} id={style.text} >
                                <h3>{data.title}</h3>
                                <p>{data.content}</p>
                                <ButtonLink text={'Download App'}/>
                            </div>



                            <div className={style.Section1Box} id={style.image}>
                                <img src={data.image} alt="" />
                            </div>

                           

                        </>



            </div>

))
}

        </div>

    )

}


export default SectionOne