import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <div className={s.logoText}>
            RV Messenger
        </div>
    </header>
}

export default Header;

