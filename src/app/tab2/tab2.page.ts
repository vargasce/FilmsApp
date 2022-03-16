import { Component } from '@angular/core';
import { Pelicula } from '../interfaces';
import { MoviesService } from '../services/movies.service';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    public textoBuscar: string = "";
    public ideas: string[] = ['Spider-Man', 'Batman', 'Juegos del Hambre', 'Matrix', 'Avenger'];
    public peliculas: Pelicula[] = [];
    public buscando: boolean = false;

    constructor(
        private _moviesService: MoviesService,
        private _modalCtrl: ModalController
    ) {}


    public onSearchChange( event: any ):void{

        this.buscando = true;

        if( event.target.value.length === 0 ){
            this.buscando = false;
            this.peliculas = [];
            return;
        }

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

    public async verDetalle( id: string ){

        const modal = await this._modalCtrl.create({
            component: DetalleComponent,
            componentProps: {
                id
            }
        });

        modal.present();
    }
    
}
