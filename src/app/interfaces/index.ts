export interface ResponseMDBAPI {
    page:          number;
    results:       Pelicula[];
    total_pages:   number;
    total_results: number;
}

export interface Pelicula {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: Language;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum Language {
    En = "en",
    Ja = "ja",
    Ko = "ko",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toResponseAPIPageMovies(json: string): ResponseMDBAPI {
        return JSON.parse(json);
    }

    public static responseAPIPageMoviesToJson(value: ResponseMDBAPI): string {
        return JSON.stringify(value);
    }
}
