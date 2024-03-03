import {tEpisode} from "@/app/types/episodes";
import styles from './EpisodeCard.module.scss'
import {tCharacter} from "@/app/types/character";

interface EpisodeCardProps {
    episode: tEpisode
}

async function fetchCharacter(API_URL: string) {
    const response = await fetch(API_URL)
    const data: tCharacter = await response.json()
    return data
}

async function EpisodeCard(props: EpisodeCardProps) {
    const {episode} = props
    const character = await fetchCharacter(episode.characters[0])

    return (
        <div className={styles.containerEp}>
            <h1>Название серии: {episode.name}</h1>
            <p>В эфир серия вышла: {episode.air_date}</p>
            <p>Номер эпизода: {episode.episode}</p>
            <p>{character.name}</p>
        </div>
    );
}

export default EpisodeCard;
