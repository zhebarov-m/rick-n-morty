import Character from "@/components/Character/Character";
import styles from './CharacterList.module.scss'
import {ApiResponse} from "@/app/types/character";

const API_URL: string = 'https://rickandmortyapi.com/api/character'

async function fetchData(){
    const response = await fetch(`${API_URL}`);
    const data: ApiResponse = await response.json()
    return data.results
}

async function CharacterList() {
    const characters = await fetchData()


    return (
        <div className={styles.list}>
            {characters?.map(character => (
                <Character key={character.id} character={character} />
            ))}
        </div>
    );
}

export default CharacterList;
