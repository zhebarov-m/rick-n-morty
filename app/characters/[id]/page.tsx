'use client';
import {useEffect} from "react";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "@/redux/hooks/hooks";
import {selectCharacter, setCharacter} from "@/redux/slices/characterSlice";
import Image from "next/image";
import styles from './page.module.scss'


const API_URL: string = 'https://rickandmortyapi.com/api/character'

type characterProps = {
    params: {
        id: number
    }
}

const Character = (props: characterProps) => {
    const {params: {id}} = props
    const dispatch = useAppDispatch()
    const character = useAppSelector(selectCharacter)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(`${API_URL}/${id}`);
                dispatch(setCharacter(data));
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchData();
    }, [id, dispatch]);

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
};

export default Character;
