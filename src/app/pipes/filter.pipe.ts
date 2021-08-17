

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
transform(allCoins: any[], term: any): any {
  if(term === undefined || term === '') return allCoins;
  return allCoins.filter(function(coin) {
    return coin.id.toLowerCase().includes(term.toLowerCase())
  })
}
}
