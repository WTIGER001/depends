import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'angular-2-local-storage'

import { DataService } from '../data.service'
import { Database, Process, GraphItem } from '../models'


@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.css']
})
export class ProcessListComponent implements OnInit {
  LOCAL_STORAGE_KEY = "ProcessListComponent.prefs"
  types = [
    "Process", "Technology", "Library", "Data Type", "Intent", "Endpoint", "Service Call", "Algorithm"
  ]

  db: Database
  items: Row[] = new Array()
  rows: Row[] = new Array()
  selected: GraphItem
  prefs = new Prefs()
  cy: any
  large: boolean

  constructor(private dataSvc: DataService, private router: Router, private modalService: NgbModal, private localStorage: LocalStorageService) {
    let str = <string>this.localStorage.get(this.LOCAL_STORAGE_KEY)
    if (str) {
      this.prefs = JSON.parse(str)
    }

    let mq = window.matchMedia("(min-width: 992px)");
    this.large = mq.matches
    mq.addListener(newMatch => {
      console.log("Media Query " + newMatch.matches + " IS LARGE");
      this.large = newMatch.matches
    });

    // Get the data
    this.dataSvc.getDb().subscribe(db => {
      this.db = db
      if (db.graph) {
        this.cy = this.dataSvc.cy
        this.generate()
      }
    })

  }

  public columnsProcess: Array<any> = [
    {
      title: 'Name',
      name: 'name',
      filtering: { filterString: '', placeholder: 'Filter by name' }
    },
    {
      title: 'Component',
      name: 'component',
      filtering: { filterString: '', placeholder: 'Filter by component' }
    },
    {
      title: 'Version',
      name: 'version',
      filtering: { filterString: '', placeholder: 'Filter by source' }
    }
  ];

  public columnsRest: Array<any> = [
    {
      title: 'Name',
      name: 'name',
      filtering: { filterString: '', placeholder: 'Filter by name' }
    },
    {
      title: 'Component',
      name: 'component',
      filtering: { filterString: '', placeholder: 'Filter by component' }
    },
    {
      title: 'Version',
      name: 'version',
      filtering: { filterString: '', placeholder: 'Filter by source' }
    }
  ];

  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public configProcess: any = {
    paging: false,
    sorting: { columns: this.columnsProcess },
    // filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered']
  };

  public configRest: any = {
    paging: false,
    sorting: { columns: this.columnsRest },
    // filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered']
  };

  public ngOnInit(): void {
    this.onChangeTable();
  }

  public toggleFilter(t) {
    this.prefs.typeSelected = t
    this.generate()
  }

  public isFiltered(t) {
    return t == this.prefs.typeSelected
  }

  public generate() {
    this.items = this.getItems(this.prefs.typeSelected)
    this.onChangeTable()
  }

  private getItems(type: string): Row[] {
    let all = new Array<Row>()

    let selector = 'node[type=\"' + type + '\"]'
    let items = this.cy.nodes(selector)

    items.forEach(p => {
      let n = p._private
      let id = n.data['id']
      let label = n.data.label
      let component = n.data.component
      all.push({
        name: label,
        value: id,
        version: n.data.version,
        component: ProcessListComponent.blank(component),
        item: n
      })
    });

    return all
  }

  public static blank(value: string): string {
    if (value) {
      return value
    } else {
      return ""
    }
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

    let columns = config.sorting.columns || [];
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
    config.sorting.columns.forEach((column: any) => {
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
          item[config.filtering.columnName].match(config.filtering.filterString)
        }
      }
      );
    }

    let tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      config.sorting.columns.forEach((column: any) => {
        if (item[column.name] && item[column.name].toString().match(config.filtering.filterString)) {
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

  public onChangeTable(config: any = this.getConfig(), page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
    if (config.filtering) {
      Object.assign(config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(config.sorting, config.sorting);
    }

    // Get the real data
    if (this.items) {
      let filteredData = this.changeFilter(this.items, config);
      let sortedData = this.changeSort(filteredData, config);
      this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
      this.length = sortedData.length;
    }
  }

  public getConfig() {
    if (this.prefs.typeSelected == "Process") {
      return this.configProcess
    } else {
      return this.configRest
    }
  }

  public onCellClick(data: any): any {
    // console.log("clicked " + JSON.stringify(data))
    let r: Row = data.row
    this.selected = r.item
  }

  public onListClick(r: any): any {
    // console.log("clicked " + JSON.stringify(data))
    this.selected = r.item
  }

  public edit() {
    if (this.selected) {
      this.router.navigate(['/edit', this.selected.data.id]);
    }
  }

  public view(r: any) {
    if (r) {
      this.router.navigate(['/view', r.item.data.id]);
    }
    if (this.selected) {
      this.router.navigate(['/view', this.selected.data.id]);
    }
  }

  public newItem() {
    this.router.navigate(['/edit'])
  }

  public set display(d: string) {
    this.prefs.display = d
    this.savePrefs()
  }

  public get display(): string {
    if (this.prefs.display) {
      return this.prefs.display
    }
    return 'table'
  }

  public savePrefs() {
    let str = JSON.stringify(this.prefs)
    this.localStorage.set(this.LOCAL_STORAGE_KEY, str)
  }
}

class Prefs {
  typeSelected = 'Process'
  display = 'table'
}

class Row {
  name: string
  value: string
  version: string
  component: string
  item: GraphItem
}