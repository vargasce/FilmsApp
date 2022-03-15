import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

    @Input('data')peliculas: Pelicula[] = [];

    public slidesOPT = {
        slidesPerView: 1.1,
        freeMode: true
    }

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

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
