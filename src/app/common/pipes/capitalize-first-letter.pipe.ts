import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter'
})
export class CapitalizeFirstLetterPipe implements PipeTransform {

  transform(value: String):String {
    return value.substring(0,1).toUpperCase().concat(value.substring(1));
  }

}
