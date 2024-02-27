import Link from "next/link";
import styles from './Navigation.module.scss'

interface NavigationProps {
    navItems: { label: string; navPath: string }[];
    isMobile: boolean
}

const Navigation = (props: NavigationProps) => {
    const { navItems, isMobile } = props;
    console.log(isMobile, 'NAV')

    return (
        <nav className={!isMobile ? [styles.navContainer, styles.active].join(' ') : styles.navContainer}>
            {navItems.map(({navPath, label}) => (
                <Link key={label} href={navPath}>
                    {label}
                </Link>
            ))}
        </nav>
    );
};

export default Navigation;
