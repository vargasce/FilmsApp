import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces';

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

  constructor() { }

  ngOnInit() {}

}
