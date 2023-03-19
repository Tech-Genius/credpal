import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Section4.module.css'

// Default component rendered in the Section4 section
function SectionFour() {

    return (
        <div className={style.Section4}>

            <div className={style.Section4Inner}>


                <div className={style.Section4InnerBackground}>

                </div>

                <div className={style.Section4OverlayText}>

               
                <h3 className={style.introText}>Modernize Your Forms In 4 Simple Steps</h3>
                <div className={style.Section4BoxWrapper}>


                    <div className={style.Section4Box} id={style.top} data-aos="fade-up" data-aos-duration="1200">
                        <h3>Pull Data</h3>
                        <p>Connect and import data from systems like SharePoint into your mobile apps. Simply filter your list to filter the data you need to be pulled.</p>
                    </div>


                    <div className={style.Section4Box} id={style.bottom} data-aos="fade-up" data-aos-duration="1200">
                        <h3>Visualize Data</h3>
                        <p>Turn your data into dynamic apps with easy mapping and enquiry screens. Open up access to information on the move with dropdown and filtering options.</p>
                    </div>


                    <div className={style.Section4Box} id={style.top} data-aos="fade-up" data-aos-duration="1200">
                        <h3>Capture Data</h3>
                        <p>Rapidly deploy data and capture functionalities to users in the field. Extend existing data and capture screens from desktop or web systems to a mobile app.</p>
                    </div>


                    <div className={style.Section4Box} id={style.bottom} data-aos="fade-up" data-aos-duration="1200">
                        <h3>Push Data</h3>
                        <p>Push files and data entries to systems like SalesForce, SharePoint and more. Generate Word, Excel and PDF outputs with our powerful data template functionality.</p>
                    </div>
                </div>

                </div>
            </div>

        </div>

    )

}


export default SectionFour