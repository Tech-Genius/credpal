import style from './assets/css/Footer.module.css'
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import logo from './assets/images/dark-logo.png'
import playstore from './assets/images/play-store.png'
import applestore from './assets/images/apple-store.png'
import { Link } from 'react-router-dom';

function Footer() {

    // this sets the current year
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());


    // the default component dispalyed on the footer component
    return (
        // footer
        <div className={style.footer}>

            <div className={style.footer_top}>

                <div className={style.footer_inner}>

                    <div className={style.footer_box}>
                        <img src={logo} alt="" />
                        <p>CredPal is a revolutionary credit solution geared towards providing seamless credit access for businesses and individuals across developing economies.</p>
                    </div>

                </div>


                <div className={style.footer_inner} id={style.grid}>

                    <div className={style.footer_box} >
                        <h4>Products</h4>
                        <ul>
                            <Link to={'/'}><li >CredPal Business</li></Link>
                            <Link to={'/'}><li >Savings & Investment</li></Link>
                            <Link to={'/'}><li >Credit Builder</li></Link>

                        </ul>
                    </div>

                    <div className={style.footer_box}  >
                        <h4>Legal</h4>
                        <ul>
                            <Link to={'/'}><li >Customer Terms of use</li></Link>
                            <Link to={'/'}><li >Merchant Terms of service</li></Link>
                            <Link to={'/'}><li >Privacy Notice</li></Link>

                        </ul>

                    </div>

                    <div className={style.footer_box}  >
                        <h4>Support</h4>
                        <ul>
                            <Link to={'/'}><li >FAQs</li></Link>
                            <Link to={'/'}><li >Blog</li></Link>

                        </ul>
                    </div>

                    <div className={style.footer_box}  >
                        <h4>Get the app</h4>
                        <img src={playstore} alt="" />
                        <img src={applestore} alt="" />
                    </div>

                </div>
            </div>

            <div className={style.footer_bottom}>
                <hr />
                <p>CredPal financial services are offered by BishopGate Microfinance Bank, fully licensed and regulated by the Central bank of Nigeria. CredPal offers innovative financial solutions including payment, savings and credit services. Our credit solution allows businesses and individuals to buy anything and pay for it in instalments across online and offline Merchants by providing them with instant access to credit at the point of checkout.</p>

                <hr />
                <div className={style.copywright}>

                    <p >Copyright © 2023. All rights reserved</p>
                </div>
            </div>

        </div>
    )
}

export default Footer 