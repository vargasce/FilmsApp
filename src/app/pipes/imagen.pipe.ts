import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string = "w500"):string {
    if( !img ) './assets/no-image-banner.jpg';
    const imgURL = `${ URL }${ size }${ img }`;
    return imgURL;
  }

}
