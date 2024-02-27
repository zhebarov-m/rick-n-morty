'use client';
import CharacterList from "@/components/CharacterList/CharacterList";
import styles from './page.module.scss'
import Pagination from "@/components/Pagination/Pagination";

const Characters = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Персонажи</h1>
            <Pagination />
            <CharacterList />
        </div>
    );
};

export default Characters;
