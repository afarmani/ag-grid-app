import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridAngular} from "ag-grid-angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-grid-api-call',
  templateUrl: './grid-api-call.component.html',
  styleUrls: ['./grid-api-call.component.scss']
})
export class GridApiCallComponent implements OnInit {

  //makes the Ag grid component instance accessible.
  @ViewChild('agGrid') agGrid: AgGridAngular;

  title = 'ag-grid-app';

  //basic grid config, specify columnsDef & rowData
  //specify header label
  columnDefs = [
    { field: 'make', sortable: true, filter: true, checkboxSelection: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true },
    { field: 'year', sortable: true, filter: true },
  ];

  //specify row data
  // rowData = [
  //   { make: 'Toyota', model: 'Rav4', price: 36000, year: 2021 },
  //   { make: 'Honda', model: 'Civic', price: 28000, year: 2021 },
  //   { make: 'Ford', model: 'Explorer', price: 38000, year: 2021 }
  // ];

  rowData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.rowData = this.http.get(
      'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json'
    );
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map(
        (node) =>
          node.make + ' ' + node.model + ' ' + node.price + ' ' + node.year
      )
      .join(',');
    alert(`selected nodes: ${selectedDataStringPresentation}`);
  }
}
