import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToDate'
})
export class ConvertToDatePipe implements PipeTransform {

  transform(value: number, character: string): string {

    let day = Math.round(value / 1000000);
    let month = Math.round((value % 1000000) / 10000);
    let year = value % 10000;
    
    return day + character + month + character + year;
  }

}
