import styles from './Footer.module.scss'
import { RxGithubLogo } from "react-icons/rx";
import { BiLogoGmail } from "react-icons/bi";
import { FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <h1 className={styles.d}>Rick & Morty💚, by <span>Magomed Zhebarov</span></h1>
            <div className={styles.social}>
                <a href="#"><RxGithubLogo/></a>
                <a href="#"><BiLogoGmail/></a>
                <a href="#"><FaTelegram/></a>
                <a href="#"><FaYoutube/></a>
                <a href="#"><FaInstagram/></a>
            </div>
        </footer>
    );
};

export default Footer;
