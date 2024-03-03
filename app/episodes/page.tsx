import EpisodeList from "@/components/EpisodeList/EpisodeList";
import styles from './episodes.module.scss'
const Page = () => {
    return (
        <div className={styles.container}>
            <EpisodeList />
        </div>
    );
};

export default Page;
