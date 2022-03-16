import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseAPIPageMoviesDetalle, Genre } from '../interfaces/IDetalle';
import { ResponseAPIPageMoviesCredits } from '../interfaces/ICredits';
import { ResponseMDBAPI } from '../interfaces';

const URL = environment.url;
const apiKey = environment.apiKey;  

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    private popularesPage: number = 0;
    private generos: Genre[] = [];

    constructor(
        private _http: HttpClient
    ) {  } 

    private executeQuery<T>( query: string ){
        query = URL + query;
        query += `&api_key=${apiKey}&language=es&include_image_language=es`;
        return this._http.get<T>( query );
    }

    public getFeature(){
        const hoy = new Date();
        const ultimoDia = new Date( hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
        const mes = hoy.getMonth() + 1;
        let mesString;
        if( mes < 10 ){
            mesString = '0' + mes;
        }else{
            mesString = mes;
        }

        const inicio = `${hoy.getFullYear()}-${mesString}-01`;
        const fin = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;

        return this.executeQuery<ResponseMDBAPI>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`);
    }

    public getPopulares(){
        this.popularesPage++;

        const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
        return this.executeQuery<ResponseMDBAPI>( query );
    }

    public getPeliculaDetalle( id: string ):Observable<ResponseAPIPageMoviesDetalle>{
        return this.executeQuery<ResponseAPIPageMoviesDetalle>(`/movie/${id}?non=1`);
    }

    public getActoresPelicula( id: string ):Observable<ResponseAPIPageMoviesCredits>{
        return this.executeQuery<ResponseAPIPageMoviesCredits>(`/movie/${id}/credits?non=1`);
    }


    public getPeliculasById( texto: string ):Observable<ResponseMDBAPI>{
        const query = `/search/movie?query=${texto}`;
        return this.executeQuery<ResponseMDBAPI>( query );
    }

    public cargarGenero():Promise<Genre[]>{
        return new Promise( resolve =>{
            this.executeQuery<any>(`/genre/movie/list?a=1`).subscribe(
                Response => {
                    this.generos = Response['genres'];
                    resolve( this.generos );
                },
                Error => {
                    console.log( Error );
                }
            );
        });
   }


}
