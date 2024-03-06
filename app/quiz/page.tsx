import styles from './quiz.module.scss'
import Quiz from "@/components/QuizGame/Game/Quiz";

const Page = () => {
    return (
        <div className={styles.quizContainer}>
            <Quiz />
        </div>
    );
};

export default Page;
