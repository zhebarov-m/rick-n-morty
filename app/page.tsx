'use client';
import Image from "next/image";
import styles from "./page.module.scss";
import YouTubeVideo from "@/components/YouTubeVideo/YouTubeVideo";

export default function Home() {


    return (
        <>
            <Image src="/wallpaper-rick-and-morty.jpg" alt="wallpaper" width={1920} height={1080}/>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1 className={styles.title}>О чем сериал "Рик и Морти"?</h1>
            <div className={styles.aboutMult}>
                <p>
                    Анимационный научно-фантастический мультсериал <b style={{color: '#37B782FF'}}>Рик и
                    Морти</b> рассказывает о межпространственных и
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    многомерных приключениях ученого-социопата Рика Санчеса и его внука Мортимера "Морти” Смита. По мере
                    прохождения своих экспедиций дуэт сталкивается с различными реальностями, обитаемыми местами,
                    планетами
                    и своими собственными альтернативными существованиями. Мудьтсериал также исследует отношения между
                    самовлюбленным Риком и несчастным Морти, поскольку первый часто травмирует Морти своими
                    сомнительными
                    методами решения проблем, с которыми они сталкиваются на протяжении всего своего путешествия.
                </p>
                <p>
                    Созданный Джастином Ройландом и Дэном Хармоном, двукратный обладатель премии «Эмми» — одно из самых
                    популярных анимационных шоу 21 века. С момента премьеры 2 декабря 2013 года шоу стало эталонным
                    экспериментом в жанре анимационной научной фантастики, и критики высоко оценили его безграничный
                    размах
                    и воображение.
                </p>
            </div>
            <div className={styles.ytVideo}>
                <h2 className={styles.title}>Трейлер к новому 7-му сезону</h2>
                <YouTubeVideo videoId="MTMbw3zKAfY"/>
            </div>
        </>
    );
}
