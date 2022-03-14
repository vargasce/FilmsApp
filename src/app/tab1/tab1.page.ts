import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/index';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    public peliculasRecientes: Pelicula[] = [];
    public populares: Pelicula[] = [];

    constructor(
        private _moviesService: MoviesService
    ) {}

    public ngOnInit(): void {
        this.getPeliculas();
        this.getPopulares();
    }

    private getPeliculas(){
        this._moviesService.getFeature().subscribe(
            Response => {
                this.peliculasRecientes = Response.results;
            },
            Error => {
                this.peliculasRecientes = [];
                console.log( Error );
            }
        );
    }

    private getPopulares(){
        this._moviesService.getPopulares().subscribe(
            Response => {
                console.log( Response );
                this.populares = Response.results;
            },
            Error => {
                this.populares = [];
                console.log( Error );
            }
        );
    }

}
