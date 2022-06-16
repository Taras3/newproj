import React from 'react';
import s from './Header.module.css';
import logo from './../img/logo.png'

const Logo = () => {
    return (
        <div className={s.logo_text}>
            <img src={logo} className={s.logo} alt="logo" />
            <p>STATISTIC</p>
         
        </div>
    )
}

export default Logo;