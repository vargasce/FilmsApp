import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

    @Input('data')peliculas: Pelicula[] = [];

    public slidesOPT = {
        slidesPerView: 1.1,
        freeMode: true
    }

    constructor(
        private modalCtrl: ModalController
    ) {
    }

    ngOnInit() {}

    public async verDetalle( id: string ){
        
        const modal = await this.modalCtrl.create({
            component: DetalleComponent,
            componentProps: {
                id: id
            }
        });

        modal.present();
    }

}
