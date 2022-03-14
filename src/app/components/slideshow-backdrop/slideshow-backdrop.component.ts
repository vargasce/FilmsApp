import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces';

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

  constructor() {
   }

  ngOnInit() {}

}
