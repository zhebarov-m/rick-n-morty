'use client';
import axios from "axios";
import Character from "@/components/Character/Character";
import styles from './CharacterList.module.scss'
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/redux/hooks/hooks";
import {
    selectCharacters,
    selectInfo,
    selectCurrentPage,
    setCharacters,
    setInfo, setPages
} from "@/redux/slices/characterSlice";
import Loader from "@/components/Loader/Loader";

const API_URL: string = 'https://rickandmortyapi.com/api/character'


const CharacterList = () => {
    const characters = useAppSelector(selectCharacters)
    const currentPage = useAppSelector(selectCurrentPage)
    const info = useAppSelector(selectInfo)
    const [isLoading, setIsLoading] = useState(true)
    console.log(info)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(`${API_URL}?page=${currentPage}`);
                dispatch(setInfo(data.info));
                dispatch(setPages(data.info.pages));
                dispatch(setCharacters(data.results));
            } catch (error) {
                console.error('Error fetching characters:', error);
            } finally {
                setIsLoading(false); // Переместили вызов setIsLoading(false) в блок finally
            }
        };

        fetchData();
    }, [currentPage, dispatch]);

    return (
        <div className={isLoading ? styles.loader : styles.list}>
            {isLoading ? (
                <Loader />
            ) : (
                characters.map(character => (
                    <Character key={character.id} character={character}/>
                ))
            )}
        </div>
    );
};

export default CharacterList;
