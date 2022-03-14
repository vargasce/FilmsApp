import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseMDBAPI } from '../interfaces';
import { environment } from '../../environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey;  

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    constructor(
        private _http: HttpClient
    ) {  } 

    private executeQuery<T>( query: string ){
        query = URL + query;
        query += `&api_key=${apiKey}&language=es&include_image_language=es`;
        console.log( query );
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

    getPopulares(){
        const query = `/discover/movie?sort_by=popularity.desc`;
        return this.executeQuery<ResponseMDBAPI>( query );
    }

}
