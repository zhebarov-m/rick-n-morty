import axios from "axios";
import {ApiResponse} from "@/app/types/character";
import Character from "@/components/Character/Character";
import styles from './CharacterList.module.scss'

const API_URL: string = 'https://rickandmortyapi.com/api/character'

async function fetchData() {
    const data = await axios.get(API_URL)

    return data.data
}

const CharacterList = async () => {

    const characters: ApiResponse = await fetchData()

    return (
        <div className={styles.list}>
            {characters.results.map(character => (
                <Character key={character.id} character={character} />
            ))}
        </div>
    );
};

export default CharacterList;
