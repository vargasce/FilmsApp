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
    public slidesOPT = {
        slidesPerView: 1.1,
        freeMode: true
    }

    constructor(
        private _moviesService: MoviesService
    ) {}

    public ngOnInit(): void {
        this._moviesService.getFeature().subscribe(
            Response => {
                this.peliculasRecientes = Response.results;
                console.log(this.peliculasRecientes);
            },
            Error => {
                console.log( Error );
            }
        );
    }

}
