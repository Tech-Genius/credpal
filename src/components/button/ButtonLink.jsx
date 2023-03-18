import React from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/ButtonLink.module.css'

const ButtonLink = ({ to, text }) => {
    return (
        <div className={style.ButtonLink}>
            <Link className={style.ButtonLinkTo} to={to}>
                <button>{text}</button>
            </Link>
        </div>

    );
};

export default ButtonLink;