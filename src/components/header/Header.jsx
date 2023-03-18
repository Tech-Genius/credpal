import React from "react";
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import style from './assets/css/Header.module.css'
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaSearch, FaRegTimesCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import light_logo from './assets/images/light-logo.png'
import dark_logo from './assets/images/dark-logo.png'
import dark_ng from './assets/images/ng-dark.png'
import light_ng from './assets/images/ng-light.png'
import { TfiAngleDown } from 'react-icons/tfi'
import ButtonLink from "../button/ButtonLink";
function Header() {


    // Initailizing the library used for the animations on scroll
    useEffect(() => {
        AOS.init();
    }, []);

    const location = useLocation();

    const activeLinkStyle = {
        borderBottom: '2px solid #00B0EA',
    };



    // this sets a default state for the navigation bar on small screen
    const [isNavExpanded, setIsNavExpanded] = useState(false)


    // this function closes the navigation bar on small screen once the menu links are clicked
    const close = () => {
        setIsNavExpanded(false);
    };


    // this function changes the background color of the header once the scroll is greater than 100
    useEffect(() => {
        let header = document.getElementById("header");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                header.style.background = " linear-gradient(to right,  white, white)";
                document.getElementById("logo-img").src = dark_logo;
                document.getElementById("ng-img").src = dark_ng;

            } else {
                header.style.background = "transparent";
                document.getElementById("logo-img").src = light_logo;
                document.getElementById("ng-img").src = light_ng;

            }
        })
    })





    // default component rendered on the header for every page
    return (

        // header
        <div className={style.header} id="header" data-aos="fade-right" data-aos-duration="1200">
            <div className={style.header_inner} >
                <div className={style.logo}>
                    <Link to="/" onClick={close}>
                        <img src={dark_logo} id='logo-img' alt="" />
                    </Link>
                </div>


                {/* menu: on large screen classname is menu, and once the nav is expanded on small screen the classname changes to sm_menu */}
                <div className={isNavExpanded ? style.sm_menu : style.menu}>
                    <ul className={style.menu_links}>



                        <div className={style.left}>
                            <div className={style.dropdown_wrap} tabIndex={0}>
                                <li className={style.menu_item}  id={style.product}>
                                   
                                  Products <TfiAngleDown className={style.dropdownIcon} />

                                    <div className={style.dropdown}>

                                        <div className={style.dropdown_item}>
                                            <Link className={style.router_link} to={''}>
                                                <h4>Savings And Investment</h4>
                                                <p>Save & invest your money with Credpal</p>
                                            </Link>

                                        </div>

                                        <div className={style.dropdown_item}>
                                            <Link className={style.router_link} to={''}>
                                                <h4>Savings And Investment</h4>
                                                <p>Save & invest your money with Credpal</p>
                                            </Link>
                                        </div>


                                    </div>
                                </li>
                            </div>
                            <li className={style.menu_item}><Link activeClass="active" onClick={close}
                                to="/business" className={style.router_link} >Business</Link></li>

                        </div>


                        <div className={style.right}>

                            <li className={style.menu_item}>
                                <Link className={style.router_link} id={style.country} to={''}>
                                  <img id="ng-img" src={dark_ng} alt="" />
                                </Link>
                            </li>


                            <li className={style.menu_item}>
                                <Link className={style.router_link} to={''}>
                                    <ButtonLink id={'button'} to={''} text={'Download Credpal App'} />
                                </Link>
                            </li>
                        </div>

                    </ul>

                </div>


                {/* sm_cntrl: this class is the parent of the two icons that controls the navigation bar on small screen, as written in the function above, once the first icon is clicked it changes the state of the navigation bar */}
                <div className={style.sm_cntrl}>
                    {!isNavExpanded ?
                        <HiBars3BottomRight className={style.cntrl} onClick={() =>
                            setIsNavExpanded(!isNavExpanded)
                        } /> : <FaRegTimesCircle className={style.cntrl} onClick={() =>
                            setIsNavExpanded(!isNavExpanded)
                        } />
                    }
                </div>

            </div>

        </div>
        // header
    )
}

export default Header