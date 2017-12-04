import { Pipe } from '@angular/core';

@Pipe({
  name: "sort"
})

export class OrderByPipe {
  transform(array: any, prop: string): any {

    array.sort(
      function(a, b) {
      if(prop == 're')
          return parseFloat(a.re) - parseFloat(b.re);
        else if(prop == 'up')
          return parseFloat(a.up) - parseFloat(b.up)
        else if(prop == 'vi')
          return parseFloat(a.vi) - parseFloat(b.vi)
        else
          return parseFloat(a.ra) - parseFloat(b.ra);
    });
    return array;
  }
}