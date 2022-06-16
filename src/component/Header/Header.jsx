import React from 'react';
import s from './Header.module.css';
import Logo from './Logo';
import Search from './Search';



const Header = (props) => {
    return (
        <header className={s.header}>
            <Logo />
            <Search countrInfo={props.countrInfo}/>
        
        </header>
    )
}

export default Header;