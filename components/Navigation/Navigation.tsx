import Link from "next/link";
import styles from './Navigation.module.scss'

interface NavigationProps {
    navItems: { label: string; navPath: string }[];
}

const Navigation = (props: NavigationProps) => {
    const { navItems } = props;

    return (
        <nav className={styles.navContainer}>
            {navItems.map(({navPath, label}) => (
                <Link key={label} href={navPath}>
                    {label}
                </Link>
            ))}
        </nav>
    );
};

export default Navigation;
