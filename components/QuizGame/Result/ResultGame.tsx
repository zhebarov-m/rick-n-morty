import Image from "next/image";
import styles from './ResultGame.module.scss'

type Character = "Rick" | "Mr. Nimbus" | "Morty" | "Summer" | "Mr. Meeseeks" | "Jerry" | "Mutant Rick";

type quoteType = {
    [key in Character]: string[];
};

interface ResultGameProps {
    correctAnswers: number;
}

const ResultGame = ({ correctAnswers }: ResultGameProps) => {
    const determineCharacter = () => {
        if (correctAnswers >= 24) {
            return "Rick";
        } else if (correctAnswers >= 18) {
            return "Mr. Nimbus";
        } else if (correctAnswers >= 15) {
            return "Morty";
        } else if (correctAnswers >= 12) {
            return "Summer";
        } else if (correctAnswers >= 9) {
            return "Mr. Meeseeks";
        } else if (correctAnswers > 5) {
            return "Jerry";
        } else {
            return "Mutant Rick";
        }
    };

    const getCharacterImage = (character: Character) => {
        return `/${character.toLowerCase()}.jpg`;
    };

    const quotes: quoteType = {
        "Rick": [
            "Wubba lubba dub dub!",
            "Не спрашивай меня об этом!",
            "Я всё знаю!"
        ],
        "Mr. Nimbus": [
            "Кто я? Я Мистер Нимбус!",
            "Добро пожаловать в моё царство!",
            "Ваше путешествие с Мистером Нимбусом только начинается."
        ],
        "Morty": [
            "Aw jeez, Rick!",
            "Я не уверен, что это хорошая идея, Рик...",
            "Это какая-то беда, Рик!"
        ],
        "Summer": [
            "Эй, я не просто какая-то девушка!",
            "Надоело быть в тени!",
            "Этот мир принадлежит всем!"
        ],
        "Mr. Meeseeks": [
            "Я Мистер Мисикс, посмотрите на меня!",
            "Я знаю, что делаю!",
            "Я мистер Мисикс!"
        ],
        "Jerry": [
            "Вот это я понимаю!",
            "Я в этом уверен, я точно смогу!",
            "В конце концов, я Джерри..."
        ],
        "Mutant Rick": [
            "Что это за место?",
            "Я потерялся...",
            "Я лучше посмотрю сериал еще раз..."
        ]
    };

    const getRandomQuote = (character: Character) => {
        const characterQuotes = quotes[character];
        return characterQuotes[Math.floor(Math.random() * characterQuotes.length)];
    };

    const character = determineCharacter();
    const characterQuote = getRandomQuote(character);
    const characterImage = getCharacterImage(character);

    return (
        <div>
            <h1 style={{fontSize: 30, textAlign: "center", fontWeight: 500}}>Поздравляем!🎉</h1>
            <p>По результатам игры Вы - <b style={{fontWeight: 700}}>{character}</b> из мультсериала <a href="https://rickandmorty.fandom.com/wiki/Rickipedia" style={{textDecoration: 'underline'}}>Рик и Морти</a>.</p>
            <div className={styles.image}>
                <Image src={characterImage} alt={character} width={200} height={200}/>
            </div>
            <p>📜Вот ваша цитата персонажа:</p>
            <blockquote style={{fontFamily: 'Consolas', color: "goldenrod"}}>{characterQuote}💭</blockquote>
        </div>
    );
};

export default ResultGame;
