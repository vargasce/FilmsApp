import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { ResponseAPIPageMoviesDetalle, Genre } from '../interfaces/IDetalle';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/index';
import { of } from 'rxjs';

@Component({
    selector: 'app-tab3', 
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

    public peliculas: ResponseAPIPageMoviesDetalle[] = [];
    public generos: Genre[] = [];
    public favoritoPorGenero: any[] = [];

    constructor(
        private _dataLocalServices: DataLocalService,
        private _moviesService: MoviesService
    ) {
    }

    public async ionViewWillEnter(){
        this.peliculas = await this._dataLocalServices.cargarFavoritos();
        this.generos = await this._moviesService.cargarGenero();
        this.pelisPorGenero( this.generos, this.peliculas);
    }

    public async ngOnInit(){
    }

    public pelisPorGenero( generos: Genre[], peliculas: ResponseAPIPageMoviesDetalle[] ){

        let pelisAux = [];

        for( let genero of generos ){

            pelisAux = peliculas.filter( pelis => pelis.genres.find( findGenres => findGenres.id == genero.id ));

            if( pelisAux.length > 0 ){
                this.favoritoPorGenero.push({ genero : genero.name, pelis : pelisAux });
                pelisAux = [];
            }

        }

    }


}
