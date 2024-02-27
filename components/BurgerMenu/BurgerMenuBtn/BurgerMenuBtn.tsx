import { GiHamburgerMenu } from "react-icons/gi";
import styles from './BurderMenuBtn.module.scss'

const BurgerMenuBtn = () => {
    return (
        <div className={styles.btnCont}>
            <button><GiHamburgerMenu /></button>
        </div>
    );
};

export default BurgerMenuBtn;
