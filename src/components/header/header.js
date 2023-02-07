import FacebookIcon from '../icons/facebook';
import TwitterIcon from '../icons/twitter';
import YoutubeIcon from '../icons/youtube';
import InstagramIcon from '../icons/instagram';
import classes from './header.module.css';
import KeuneLogo from '../icons/keune';
import Navigation from '../navigation/navigation';
import Socials from '../socials/socials';

const Header = () => {
    return (
        <header className={classes.header}>
            <a href='#'>
                <KeuneLogo fill="white" />
            </a>
            <Navigation />
            <Socials />
        </header>
    );
}

export default Header;