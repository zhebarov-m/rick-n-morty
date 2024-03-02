
export type tEpisode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

type Info = {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export type ApiEpisodes = {
    info: Info;
    results: tEpisode[];
}
