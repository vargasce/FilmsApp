import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ResponseAPIPageMoviesDetalle } from '../../interfaces/IDetalle';
import { ResponseAPIPageMoviesCredits, Cast } from '../../interfaces/ICredits';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

    @Input()id: string;

    public detalle: ResponseAPIPageMoviesDetalle;
    public credits: ResponseAPIPageMoviesCredits;
    public actores: Cast[] = [];
    public lengthText: number = 150;

    public slideOptPoster = {
        slidesPerView: 3.2,
        freeMode: true,
        spacebetween: -10
    }

    constructor(
        private _movieService: MoviesService,
        private modalCtrl: ModalController
    ) { }

    ngOnInit() {
        this.getPelicula();
        this.getCreditos();
    }

    public getPelicula(){
        this._movieService.getPeliculaDetalle( this.id ).subscribe(
            Detalle => {
                this.detalle = Detalle;
            },
            Error => {
                console.log( Error );
            }
        );
    }

    public getCreditos(){
        this._movieService.getActoresPelicula( this.id ).subscribe(
            Credits => {
                this.credits = Credits;
                this.actores = Credits.cast;
            },
            Error => {
                console.log( Error );
            }
        );
    }

    public regresar(){
        this.modalCtrl.dismiss();
    }

}
