import { DataService } from "./data.service";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "nodetypelabel"
})
export class NodetypelabelPipe implements PipeTransform {
  constructor(private data: DataService) {}

  transform(value: any, args?: any): any {
    let t = this.data.nodeType(value);
    if (t) {
      return t.label;
    }
    return null;
  }
}
