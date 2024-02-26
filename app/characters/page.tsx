import CharacterList from "@/components/CharacterList/CharacterList";
import styles from './page.module.scss'

const Characters = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Персонажи</h1>
            <CharacterList />
        </div>
    );
};

export default Characters;
