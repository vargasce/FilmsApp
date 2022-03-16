import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ResponseAPIPageMoviesDetalle } from '../interfaces/IDetalle';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

    private peliculas: ResponseAPIPageMoviesDetalle[] = [];

    constructor(
        private _storageService: Storage
    ) { 
        this.init();
    }

    public async init(){
        await this._storageService.create();
    }

    public guardarPelicula( pelicula: ResponseAPIPageMoviesDetalle ){

        let exists = false;
        let mensaje = '';


        for( const peli of this.peliculas ){
            if( peli.id === pelicula.id ){
                exists = true;
                break;
            }
        }

        if( exists ){
             this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id );
             mensaje = 'Removido de Favoritos!!';
        }else{
            this.peliculas.push( pelicula );
             mensaje = 'Agregado a Favoritos!!';
        }

        this._storageService.set('peliculas', this.peliculas );

        console.log( this.peliculas );

        return mensaje;
    }

}
