import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Database, Process, GraphItem } from '../models'

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.css']
})
export class ProcessListComponent implements OnInit {
  types = [
    "Process", "Technology", "Library", "Data Type", "Intent", "Endpoint", "Service Call", "Algorithm"
  ]

  db: Database
  items: Row[] = new Array()
  rows: Row[] = new Array()
  selected: Process
  prefs = new Prefs()
  cy: any

  constructor(private dataSvc: DataService) {
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
        component: ProcessListComponent.blank(component)
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
    console.log("clicked " + JSON.stringify(data))

    let r: Row = data.row
    let found = false
    if (this.prefs.typeSelected == "Process") {
      let pName = r.value
      this.db.processes.forEach(p => {
        if (pName == p.process_name) {
          this.selected = p
          found = true
        }
      })
    }
    if (!found) {
      this.selected = undefined
    }
  }
}


class Prefs {
  typeSelected = 'Process'
}

class Row {
  name: string
  value: string
  version: string
  component: string
}