
export interface ResponseAPIPageMoviesSearch {
    page:          number;
    results:       Pelicula[];
    total_pages:   number;
    total_results: number;
}

export interface Pelicula {
    adult:             boolean;
    backdrop_path:     null | string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
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

export enum OriginalLanguage {
    En = "en",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toResponseAPIPageMoviesSearch(json: string): ResponseAPIPageMoviesSearch {
        return JSON.parse(json);
    }

    public static responseAPIPageMoviesSearchToJson(value: ResponseAPIPageMoviesSearch): string {
        return JSON.stringify(value);
    }
}
