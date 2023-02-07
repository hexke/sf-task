import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import TwitterIcon from "../icons/twitter";
import YoutubeIcon from "../icons/youtube";
import classes from "./socials.module.css";

const Socials = () => {
    return (
        <div className={classes.socials}>
            <a href="#">
                <FacebookIcon fill="rgba(255,255,255,0.6)" className={classes.facebook} />
            </a>
            <a href="#">
                <YoutubeIcon fill="rgba(255,255,255,0.6)" className={classes.youtube} />
            </a>
            <a href="#">
                <InstagramIcon fill="rgba(255,255,255,0.6)" className={classes.instagram} />
            </a>
            <a href="#">
                <TwitterIcon fill="rgba(255,255,255,0.6)" className={classes.twitter} />
            </a>
        </div>
    );
}

export default Socials;