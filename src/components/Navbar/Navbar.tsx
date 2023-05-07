import React from "react";
import s from './Navbar.module.css';
import NavbarLink from "./NavLink/NavbarLink";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.category}>БАЗОВЫЕ ЭЛЕМЕНТЫ</div>
        <NavbarLink name='Profile' link='/profile'/>
        <NavbarLink name='Messages' link='/dialogs'/>
        <NavbarLink name='News' link='/news'/>
        <div className={s.category}>ПРОДВИНУТЫЕ ЭЛЕМЕНТЫ</div>
        <NavbarLink name='Profile' link='/profile2'/>
        <NavbarLink name='Messages' link='/dialogs2'/>
        <NavbarLink name='News' link='/news2'/>
    </nav>
}

export default Navbar;


