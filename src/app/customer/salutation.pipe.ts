import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(args=="F")
    {
      return value = "Ms. "+value
    }
    else if(args=="M")
    {
      return value = "Mr. "+value
    }
    
  }

}
