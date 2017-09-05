import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from './data.service'

@Pipe({
  name: 'label'
})
export class LabelPipe implements PipeTransform {

  constructor(private data: DataService) {

  }

  transform(value: any, args?: any): any {
    if (value) {
      let item = this.data.getItem(value)
      if (item) {
        return item.data.label
      }
    }
    return null;
  }

}
