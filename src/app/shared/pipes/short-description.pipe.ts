import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})
export class ShortDescriptionPipe implements PipeTransform {

  transform(value: String): unknown {
    if(value.length>160) return value.substring(0,160) + " . . . "
    else return value;
  }

}
