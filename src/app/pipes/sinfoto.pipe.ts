import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {


  transform(value: any[]): string {

    const noImg: string = 'assets/img/noimage.png';

    if (!value) {
      return noImg;
    }

    return (value.length > 0) ? value[1].url : noImg;
  }

}
