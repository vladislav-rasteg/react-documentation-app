import s from './NavbarLink.module.css';
import { NavLink } from "react-router-dom";

const NavbarLink = (props: any) => {
    return (
        <NavLink to={props.link} className = { navData => navData.isActive ? s.active : s.linkWrapper }> <div className={s.linkText}> {props.name} </div></NavLink>
    )

}


export default NavbarLink;