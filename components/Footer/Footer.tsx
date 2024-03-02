'use client';
import styles from './Footer.module.scss'
import { RxGithubLogo } from "react-icons/rx";
import { BiLogoGmail } from "react-icons/bi";
import { FaTelegram, FaYoutube } from "react-icons/fa";

const Footer = () => {

    return (
        <footer className={styles.container}>
           <div className={styles.wrapper}>
               <div className={styles.social}>
                   <a href="#"><RxGithubLogo/></a>
                   <a href="#"><BiLogoGmail/></a>
                   <a href="#"><FaTelegram/></a>
                   <a href="#"><FaYoutube/></a>
               </div>
               <h1 className={styles.d}>Rick & Morty💚</h1>
               <h2>Created by: <span>Zhebarov Muhammad</span></h2>
               {/*<p>{info.count} количество персонажей; {pages} страниц; Текущая страница: {currentPage}</p>*/}
           </div>
        </footer>
    );
};

export default Footer;
