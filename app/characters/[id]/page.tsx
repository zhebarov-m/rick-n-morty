
import Image from "next/image";
import styles from './page.module.scss'
import {tCharacter} from "@/app/types/character";


const API_URL: string = 'https://rickandmortyapi.com/api/character'

type characterProps = {
    params: {
        id: number
    }
}

async function fetchData(id: number) {
    const response = await fetch(`${API_URL}/${id}`);
    const data: tCharacter = await response.json()

    return data
}

async function Character(props: characterProps) {
    const {params: {id}} = props
    const character = await fetchData(id)


    return (
        <div className={styles.container}>
            <pre className={styles.title}>{character.name}</pre>
            <div className={styles.profileCharacter}>
                <Image src={character.image} alt={character.name} width={300} height={300}/>
                <div className={styles.info}>
                    <div className={styles.infoBlocks}>
                        <h1>
                            <span>Пол:</span> {character.gender}
                        </h1>
                        <p><span>Статус:</span> {character.status}</p>
                        <p>
                            <span>Род:</span> {character.species.length < 17 ? character.species : character.species.slice(0, 15) + '...'}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.details}>
                <p>
                    <span>Родом c:</span>
                    {character.origin.name === 'unknown' ? 'н/д' : character.origin.name}
                </p>
                <p><span>Последнее известное местоположение:</span> {character.location.name}</p>
            </div>
        </div>
    );
}

export default Character;
