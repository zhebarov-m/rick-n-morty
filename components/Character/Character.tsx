// Character.jsx
import React from "react";
import {tCharacter} from "@/app/types/character";
import Image from "next/image";
import styles from './CharacterCard.module.scss'

interface CharacterProps {
    character: tCharacter
}

const Character = (props: CharacterProps) => {
    const {character} = props
    return (
        <div className={styles.characterCard}>
            <Image src={character.image} alt={character.name} width={200} height={100}/>
            <h1 className={styles.title}>{character.name}</h1>
            <p>Status: <b style={character.status === 'Alive' ? {color: 'green'} : {color: "red"}}>{character.status}</b></p>
            <p>Species: {character.species}</p>
            {/* Добавьте другие свойства персонажа по желанию */}
        </div>
    );
};

export default Character;
