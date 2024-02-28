'use client';

import imageImporter from "@/app/lib/ImageImporter";
import styles from './Header.module.scss'
import Image from "next/image";
import Navigation from "@/components/Navigation/Navigation";
import BurgerMenuBtn from "@/components/BurgerMenu/BurgerMenuBtn/BurgerMenuBtn";
import {useState} from "react";

export const navItems = [
    { label: 'Главная', navPath: '/' },
    { label: 'Персонажи', navPath: '/characters' },
    { label: 'Эпизоды', navPath: '/episodes' },
    { label: 'Квиз', navPath: '/quiz' }
];

const Header = () => {
    const {logo, github} = imageImporter.getImage()
    const [isMobile, setIsMobile] = useState(false)
    console.log(isMobile)

    const handleMobileMenu = () => {
        setIsMobile(prevState => !prevState)
    }

    return (
        <header className={styles.headerWrapper}>
            <div className={styles.container}>
                <div onClick={handleMobileMenu} className={styles.mobileBurg}>
                    <BurgerMenuBtn/>
                </div>
                <div className={styles.navWrapper}>
                    <div className={styles.logo}>
                        <Image src={logo.imgPath} alt={logo.description} width={215} height={68}/>
                    </div>
                    <Navigation isMobile={isMobile} navItems={navItems}/>
                </div>
                <div className={styles.githubLink}>
                    <Image className={styles.img} src="/github-48-icon.png" alt={github.description} width={48}
                           height={48}/>
                </div>
            </div>
        </header>
    );
};

export default Header;
