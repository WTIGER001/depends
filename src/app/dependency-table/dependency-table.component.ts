import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { DataService } from '../data.service'
import { LocalStorageService } from 'angular-2-local-storage'
import { Database, GraphItem } from '../models'
import * as _ from 'lodash'

@Component({
  selector: 'app-dependency-table',
  templateUrl: './dependency-table.component.html',
  styleUrls: ['./dependency-table.component.css']
})
export class DependencyTableComponent implements OnInit, OnChanges {

  @Input() dependencyType: string = "predecessors"
  _items: any[] = new Array()

  predecessors: any[] = []
  successors: any[] = []
  rows: any[] = []

  db: Database
  cy: any

  public columns: Array<any> = [
    {
      title: 'Name',
      name: 'id',
      filtering: { filterString: '', placeholder: 'Filter by name' }
    },
    {
      title: 'Type',
      name: 'type',
      filtering: { filterString: '', placeholder: 'Filter by component' }
    },
    {
      title: 'Version',
      name: 'version',
      filtering: { filterString: '', placeholder: 'Filter by source' }
    }

  ];

  public config: any = {
    paging: false,
    sorting: { columns: this.columns },
    filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered']
  };

  constructor(private dataSvc: DataService, private localStorage: LocalStorageService) {
    // Init Cytoscape engine
    this.cy = cytoscape({
      headless: true,
      styleEnabled: false,
    });

    // Get the data
    this.dataSvc.getDb().subscribe(db => {
      this.db = db
      if (db.graph) {
        // Add the nodes
        db.graph.forEach((i: GraphItem) => {
          this.cy.add(i)
        })
        this.generate()
      }
    })
  }

  @Input()
  set items(newItems: string[]) {
    this._items = newItems
    this.generate()
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.generate()
  }

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

  public onChangeTable(config: any, page: any = {}): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    if (this.predecessors) {
      let filteredData = this.changeFilter(this.predecessors, this.config);
      let sortedData = this.changeSort(filteredData, this.config);
      this.rows = sortedData;
    }
  }

  public onCellClick(data: any): any {
    console.log("clicked " + JSON.stringify(data))
  }

  public onAdd($event: string) {
    this.generate()
  }

  public onRemove($event: string) {
    this.generate()
  }

  public generate() {
    // quick out
    if (this._items.length == 0) {
      this.predecessors = []
      this.onChangeTable(this.config);
      return
    }

    let mine: string[] = []
    this._items.forEach(i => {
      mine.push('#' + i)
    })
    let selector = mine.join(',')
    console.log("SELECTOR " + selector);

    let preds: any

    if (this.dependencyType == 'predecessors') {
      preds = this.cy.nodes(selector).predecessors()
    } else if (this.dependencyType == 'successors') {
      preds = this.cy.nodes(selector).successors()
    } else if (this.dependencyType == 'incomers') {
      preds = this.cy.nodes(selector).incomers()
    } else if (this.dependencyType == 'outgoers') {
      preds = this.cy.nodes(selector).outgoers()
    }


    let newPreds = []
    preds.forEach(p => {
      let n = p._private
      if (n.group == 'nodes') {
        let item = {
          id: n.data['id'],
          type: n.data['type'],
          version: n.data['version']
        }
        newPreds.push(item)
      }
    });

    this.predecessors = newPreds
    this.onChangeTable(this.config);
  }
}