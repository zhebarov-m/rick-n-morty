import styles from './Footer.module.scss'
import { RxGithubLogo } from "react-icons/rx";
import { BiLogoGmail } from "react-icons/bi";
import { FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";
import Navigation from "@/components/Navigation/Navigation";
import {navItems} from "@/components/Header/Header";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <Navigation navItems={navItems}/>
            <div className={styles.social}>
                <a href="#"><RxGithubLogo/></a>
                <a href="#"><BiLogoGmail/></a>
                <a href="#"><FaTelegram/></a>
                <a href="#"><FaYoutube/></a>
            </div>
            <h1 className={styles.d}>Rick & Morty💚</h1>
            <h2>Created by: <span>Zhebarov Muhammad</span></h2>
        </footer>
    );
};

export default Footer;
