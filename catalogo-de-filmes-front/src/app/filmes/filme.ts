import { DatePipe } from '@angular/common';
import { DateFormatPipe } from 'angular2-moment';

export interface ProductionCompanies {
    id: number,
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ProductionCountries {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguages {
    iso_639_1: string;
    name: string;
}


/*export interface Genre {
    id: number;
    name: string;
}*/


// TIPO DO FILME VINDO DIRETO DA API

/*export interface Filme {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: object;
    budget: number;
    genres: Array<Genre>;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<ProductionCompanies>;
    production_countries: Array<ProductionCountries>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<SpokenLanguages>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}*/


// TIPO DO FILME VINDO DIRETO DO BACK


export interface Genre {
    id: number;
    name: string;
}

export interface Filme {
    id: number;
    originalTitle: string;
    title: string;
    overview: string;
    releaseDate: Date;
    genresT: Array<Genre>;
    genres: Array<Genre>;
    setGenres:([])=>void;
}


export class FilmeIm implements Filme { 
    id: number;
    originalTitle: string;
    title: string;
    overview: string;
    releaseDate: Date;
    genresT: Array<Genre>;
    genres: Array<Genre>;
    
    constructor(originalTitle: string, title: string, overview: string,
        releaseDate: Date) { 
            this.originalTitle = originalTitle;
            this.title = title;
            this.overview = overview;
            this.releaseDate = new Date(releaseDate);
            this.genres = [];
    }

    setGenres(genres:Genre[]):void { 
            for(let i = 0; i < genres.length; i++) {
                this.genres.push(genres[i]);
            }
    }
}
