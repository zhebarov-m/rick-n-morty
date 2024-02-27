'use client';
import styles from './Footer.module.scss'
import { RxGithubLogo } from "react-icons/rx";
import { BiLogoGmail } from "react-icons/bi";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import Navigation from "@/components/Navigation/Navigation";
import {navItems} from "@/components/Header/Header";
import {useAppSelector} from "@/redux/hooks/hooks";
import {selectCurrentPage, selectInfo, selectPages} from "@/redux/slices/characterSlice";

const Footer = () => {
    const pages = useAppSelector(selectPages)
    const info = useAppSelector(selectInfo)
    const currentPage = useAppSelector(selectCurrentPage)

    return (
        <footer className={styles.container}>
           <div className={styles.wrapper}>
               <Navigation navItems={navItems}/>
               <div className={styles.social}>
                   <a href="#"><RxGithubLogo/></a>
                   <a href="#"><BiLogoGmail/></a>
                   <a href="#"><FaTelegram/></a>
                   <a href="#"><FaYoutube/></a>
               </div>
               <h1 className={styles.d}>Rick & Morty💚</h1>
               <h2>Created by: <span>Zhebarov Muhammad</span></h2>
               <p>{info.count} количество персонажей; {pages} страниц; Текущая страница: {currentPage}</p>
           </div>
        </footer>
    );
};

export default Footer;
