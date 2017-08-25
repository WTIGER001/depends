import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Process } from '../models'

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.css']
})
export class ProcessListComponent implements OnInit {

  processes: Process[] = new Array()
  rows: Process[] = new Array()
  selected: Process

  constructor(private dataSvc: DataService) {
    this.dataSvc.getDb().subscribe(db => {
      console.log("Got new Database " + db.processes.length);
      this.processes = db.processes
      this.onChangeTable(this.config);
    })
  }

  public columns: Array<any> = [
    {
      title: 'Name',
      name: 'process_name',
      filtering: { filterString: '', placeholder: 'Filter by name' }
    },
    {
      title: 'Component',
      name: 'component_name',
      filtering: { filterString: '', placeholder: 'Filter by component' }
    },
    {
      title: 'Source',
      name: 'source',
      filtering: { filterString: '', placeholder: 'Filter by source' }
    }

  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public config: any = {
    paging: false,
    sorting: { columns: this.columns },
    filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered']
  };

  public ngOnInit(): void {
    this.onChangeTable(this.config);
  }

  public changePage(page: any, data: Array<any>): Array<any> {
    // let start = (page.page - 1) * page.itemsPerPage;
    // let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    // return data.slice(start, end);
    return null
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          if (item[column.name]) {
            return item[column.name].match(column.filtering.filterString);
          }
          console.log("OOPS " + column.name);
          return true;
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) => {
        if (item[config.filtering.columnName]) {
          item[config.filtering.columnName].match(this.config.filtering.filterString)
        }
      }
      );
    }

    let tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name] && item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    if (this.processes) {
      let filteredData = this.changeFilter(this.processes, this.config);
      let sortedData = this.changeSort(filteredData, this.config);
      this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
      this.length = sortedData.length;
    }
  }

  public onCellClick(data: any): any {
    console.log("clicked " + JSON.stringify(data))

    this.selected = data.row
  }


}
