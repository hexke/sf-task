import classes from './header.module.css';
import KeuneLogo from '../icons/keune';
import Navigation from '../navigation/navigation';
import Socials from '../socials/socials';
import { useContext } from 'react';
import { themeContext } from '../store/theme-store';

const Header = () => {
    const { darkTheme } = useContext(themeContext);

    return (
        <header className={`${classes.header} ${darkTheme ? classes["dark-theme"] : ""}`}>
            <a href='#' className={classes.logo}>
                <KeuneLogo fill="white" />
            </a>
            <Navigation />
            <Socials />
        </header>
    );
}

export default Header;