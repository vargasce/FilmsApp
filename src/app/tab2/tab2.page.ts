import { Component } from '@angular/core';
import { Pelicula } from '../interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    public textoBuscar: string = "";
    public ideas: string[] = ['Spider-Man', 'Batman', 'Juegos del Hambre', 'Matrix', 'Macarena hace muchas preguntas'];
    public peliculas: Pelicula[] = [];
    public buscando: boolean = false;

    constructor(
        private _moviesService: MoviesService
    ) {}


    public onSearchChange( event: any ):void{

        this.buscando = true;
        this._moviesService.getPeliculasById( event.target.value ).subscribe(
            Search => {
                console.log( Search );
                this.peliculas = [ ...Search.results ];
                this.buscando = false;
            },
            Error => {
                console.log( Error );
            }
        );

    }

    public ideaEvent( pelicula: string ){
        this.textoBuscar = pelicula;
    }

}
