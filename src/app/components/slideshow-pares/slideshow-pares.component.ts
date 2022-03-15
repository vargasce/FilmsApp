import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pelicula } from '../../interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

    @Input('data')peliculas: Pelicula[] = [];
    @Output() cargarMas = new EventEmitter<any>();
    public slidesOPT = {
        slidesPerView: 1.1,
        freeMode: true,
        spaceBeetween: -12
    }

    constructor(
        private modalCtrl: ModalController
    ) { }

    ngOnInit() {}

    public onClick():any{
        this.cargarMas.emit();
    }

    public async verDetalle( id: string ){

        const modal = await this.modalCtrl.create({
            component: DetalleComponent,
            componentProps: {
                id
            }
        });

        modal.present();
    }

}
