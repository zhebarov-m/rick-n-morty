import imageImporter from "@/app/lib/ImageImporter";
import styles from './Header.module.scss'
import Image from "next/image";
import Navigation from "@/components/Navigation/Navigation";
import BurgerMenuBtn from "@/components/BurgerMenu/BurgerMenuBtn/BurgerMenuBtn";

export const navItems = [
    { label: 'Главная', navPath: '/' },
    { label: 'Персонажи', navPath: '/characters' },
    { label: 'Эпизоды', navPath: '/episodes' },
    { label: 'Квиз', navPath: '/quiz' }
];

const Header = () => {
    const {logo, github} = imageImporter.getImage()

    const handleVisibleMobileMenu = () => {

    }

    return (
        <header className={styles.container}>
            <div className={styles.mobileBurg}>
                <BurgerMenuBtn />
            </div>
            <div className={styles.navWrapper}>
                <div className={styles.logo}>
                    <Image src={logo.imgPath} alt={logo.description} width={215} height={68}/>
                </div>
                <Navigation navItems={navItems}/>
            </div>
            <div className={styles.githubLink}>
                <Image className={styles.img} src="/github-48-icon.png" alt={github.description} width={48} height={48}/>
            </div>
        </header>
    );
};

export default Header;
