import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Section2.module.css'
import Section2 from './assets/images/section2.png'
import { SectionTwoData } from "./data/Section2Data";

// Default component rendered in the Section2 section
function SectionTwo() {
    const colors = ['#F6F0EF', '#F4F1F7', '#E8F4FF', '#EBF1FF'];
    return (

        <div className={style.Section2}>

            <div className={style.Section2Inner}>


                {
                    SectionTwoData.map((data, index) => (




                        <>
                            <div className={style.Section2Box}  style={{ backgroundColor: colors[index % colors.length] }} id={style.text} >
                            <img src={data.image} id={style.first} alt="" />
                                <h3>{data.title}</h3>
                                <p>{data.content}</p>
                           <Link><img src={data.button} alt="" /></Link>
                            </div>



                        </>


                    ))
                }


            </div>

        </div>

    )

}


export default SectionTwo