'use client'
import {useState, useEffect} from 'react';
import styles from './Quiz.module.scss';
import Image from 'next/image';
import {tCharacter} from '@/app/types/character';
import Loader from "@/components/Loader/Loader";
import ResultGame from "@/components/QuizGame/Result/ResultGame";

const API_URL: string = 'https://rickandmortyapi.com/api/character';

const generateRandomNumber = () => {
    const min = 0;
    const max = 826;

    return Math.floor(Math.random() * (max - min + 1) + min);
};

const Quiz = () => {
    const [character, setCharacter] = useState<tCharacter | null>(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [resultGame, setResultGame] = useState(0)

    const percentage = Math.round(resultGame / 25 * 100)
    console.log(character, correctAnswers, percentage)

    const handleAliveClick = async () => {
        if (character?.status === 'Alive' || character?.status === 'unknown') {
            setCorrectAnswers(correctAnswers + 1);
        }
        setResultGame(prevState => ++prevState)
        const data = await fetchData();
        setCharacter(data);
    };

    const handleDeadClick = async () => {
        if (character?.status === 'Dead') {
            setCorrectAnswers(correctAnswers + 1);
        }
        setResultGame(prevState => ++prevState)
        const data = await fetchData();
        setCharacter(data);
    };

    async function fetchData() {
        const number = generateRandomNumber();
        const response = await fetch(`${API_URL}/${number}`);
        const data: tCharacter = await response.json();
        setCharacter(data);
        return data;
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (!character) {
        return <Loader/>;
    }

    return (
        <div className={styles.container}>
            <h1 style={{fontSize: 24, textAlign: "center", padding: '6px 0 12px', fontFamily: "monospace", fontWeight: 700}}>{'Игра в угадай "Жив или мёртв персонаж?"'}</h1>
            {resultGame !== 25 ? <div>
                <div className={styles.progress}>
                    <div style={{width: `${percentage <= 100 ? percentage : 100}%`}}
                         className={styles.progressInner}></div>
                </div>
                <div className={styles.wrapper}>
                    <Image src={character.image} alt={character.name} width={250} height={250}/>
                    <h2>{character.name}</h2>
                    <div className={styles.cardButtons}>
                        <button onClick={handleAliveClick} className={`${styles.cardButton} ${styles.aliveBtn}`}>
                            Жив
                        </button>
                        <button onClick={handleDeadClick} className={`${styles.cardButton} ${styles.deadBtn}`}>
                            Мёртв
                        </button>
                    </div>
                </div>
            </div> : <ResultGame correctAnswers={correctAnswers}/>}
        </div>
    );
};

export default Quiz;
