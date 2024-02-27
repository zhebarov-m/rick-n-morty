'use client';
import axios from "axios";
import Character from "@/components/Character/Character";
import styles from './CharacterList.module.scss'
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/redux/hooks/hooks";
import {selectCharacters, selectPage, setCharacters} from "@/redux/slices/characterSlice";

const API_URL: string = 'https://rickandmortyapi.com/api/character'


const CharacterList = () => {
    const characters = useAppSelector(selectCharacters)
    const page = useAppSelector(selectPage)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(`${API_URL}?page=${page}`);
                dispatch(setCharacters(data.results));
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchData();
    }, [page, dispatch]);

    return (
        <div className={styles.list}>
            {characters.map(character => (
                <Character key={character.id} character={character} />
            ))}
        </div>
    );
};

export default CharacterList;
