// Character.jsx
import React from "react";
import {tCharacter} from "@/app/types/character";
import Image from "next/image";
import styles from './CharacterCard.module.scss'
import {GiCrossMark} from "react-icons/gi";
import {FaQuestion} from "react-icons/fa";

enum Status {
    DEAD = 'Dead',
    ALIVE = 'alive',
    UNKNOWN = 'unknown'
}

interface CharacterProps {
    character: tCharacter
}

const Character = (props: CharacterProps) => {
    const {character} = props

    const dead = character.status === Status.DEAD
    const unknown = character.status === Status.UNKNOWN
    return (
        <div className={styles.characterCard}>
            <Image
                className={styles.image}
                src={character.image}
                alt={character.name}
                width={184}
                height={184}/>
            <div className={styles.aboutCharacter}>
                <h1 className={styles.title}>
                    {character.name}
                </h1>
                <p className={styles.status}>
                    Status: <b>{character.status}</b>
                    <span className={styles.statusIcon}>
                        {
                            dead
                                ? '🔴'
                                : unknown
                                    ? '🔘'
                                    : '🟢'
                        }
                    </span>
                </p>
                <p className={styles.species}>Species: {character.species}</p>
                {/* Добавьте другие свойства персонажа по желанию */}
            </div>
        </div>
    );
};

export default Character;
