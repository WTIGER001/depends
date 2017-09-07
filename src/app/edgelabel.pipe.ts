import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edgelabel'
})
export class EdgelabelPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
