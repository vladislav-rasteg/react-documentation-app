import React from "react";
import s from './Navbar.module.css';
import NavbarLink from "./NavLink/NavbarLink";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.category}>БАЗОВЫЕ ЭЛЕМЕНТЫ</div>
        <NavbarLink name='Введение' link='/intro'/>
        <NavbarLink name='Подключение счетчика' link='/counter'/>
        <NavbarLink name='Уведомления в Telegram' link='/telegram'/>
        <NavbarLink name='Уведомления в WhatsApp' link='/whatsapp'/>
        <NavbarLink name='Интеграции' link='/integrations'/>
        <div className={s.category}>БОЛБШЕ ИНФОРМАЦИИ</div>
        <NavbarLink name='Changelog' link='/changelog'/>
        <NavbarLink name='TargetAds API Status' link='/api_status'/>
        <NavbarLink name='TargetAds University' link='/university'/>
        <NavbarLink name='TargetAds Community' link='/community'/>
    </nav>
}

export default Navbar;


