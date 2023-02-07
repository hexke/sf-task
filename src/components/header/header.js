import classes from './header.module.css';
import KeuneLogo from '../icons/keune';
import Navigation from '../navigation/navigation';
import Socials from '../socials/socials';

const Header = () => {
    return (
        <header className={classes.header}>
            <a href='#' className={classes.logo}>
                <KeuneLogo fill="white" />
            </a>
            <Navigation />
            <Socials />
        </header>
    );
}

export default Header;