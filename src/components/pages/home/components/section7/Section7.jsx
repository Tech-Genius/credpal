import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Section7.module.css'
import Section7 from './assets/images/section7.png'


// Default component rendered in the Section7 section
function SectionSeven() {

    return (

        <div className={style.Section7}>

            <div className={style.Section7Inner}>


                <div className={style.Section7Box} id={style.image} data-aos="fade-right" data-aos-duration="1200">
                    <img src={Section7} alt="" />
                </div>


                <div className={style.Section7Box} id={style.text} data-aos="fade-left" data-aos-duration="1200">
                    <h3>Elevate your <span>team's</span> productivity with <span>SmatForms</span>.</h3>
                   
                    <p>If you're in the business of maintenance, field service, or any other industry that requires your team to work in the field, you know how important it is to stay organized and productive. But managing a team can be a challenge, especially when you're dealing with different schedules, locations, and tasks. That's where a mobile app can help.</p>
                    <p>A maintenance mobile application, workflows, and field service on the SmatForms platform can give your team the tools they need to stay organized, productive, and connected. Here are just a few examples of how SmatForms these apps can be useful:</p>
                    <p> <span>•</span> <strong>Salesforce</strong> <br />
                        Generate & upload custom file outputs to existing entities in your Salesforce account.
                    </p>

                    <p> <span>•</span> <strong>SharePoint</strong> <br />
                    Insert Form entry data as rows into a SharePoint List to organize information.
                    </p>

                    <p> <span>•</span> <strong>PowerBI</strong> <br />
                    Reporting & dashboarding made easy. Push Form entry data into a PowerBI dataset.
                    </p>
                </div>

            </div>

        </div>

    )

}


export default SectionSeven