import { Pipe, PipeTransform } from '@angular/core';
import { logWarnings } from 'protractor/built/driverProviders';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTearm:any): any {
    console.log('filter value',value);
    return value.filter(function(search) {
      console.log('search',search);
      
      return search.display.displayName.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
    });
  }

}
