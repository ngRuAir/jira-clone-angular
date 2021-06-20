import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayIdFind'
})
export class ArrayIdFindPipe implements PipeTransform {

  transform(value: {id: string}[], id: string): unknown {
    return value.find(v => v.id === id);
  }
}
