import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, name:any )  {
     if (name ===" "){
      return value;
     }
    return value.filter((x:any)=>x.name.toLowerCase().startsWith(name.toLowerCase()))
  }

}
