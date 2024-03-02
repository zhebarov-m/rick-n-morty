import {ApiEpisodes} from "@/app/types/episodes";
import EpisodeCard from "@/components/EpisodeCard/EpisodeCard";

const API_URL_EPISODES: string = 'https://rickandmortyapi.com/api/episode'

async function fethEpisodes() {
    const response = await fetch(API_URL_EPISODES)
    const data: ApiEpisodes = await response.json()
    return data
}

async function EpisodeList() {
    const episodes = await fethEpisodes().then(res => res.results)

    return (
        <div>
            {episodes.map(episode => <EpisodeCard key={episode.id} episode={episode} />)}
        </div>
    );
}

export default EpisodeList;
