import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridEvent, GridApi } from 'ag-grid-community';
import { GenericRendererComponent } from '../grid-api-call/cells/generic-renderer/generic-renderer.component';

@Component({
  selector: 'app-cell-rendering',
  templateUrl: './cell-rendering.component.html',
  styleUrls: ['./cell-rendering.component.scss'],
})
export class CellRenderingComponent implements OnInit {
  columnDefs;
  frameworkComponents: any;

  private gridApi;
  private gridColumnApi;
  private searchValue;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.columnDefs = [
      {
        headerName: 'Name',
        field: 'athlete',
        width: 150,
      },
      {
        headerName: 'Age',
        field: 'age',
        width: 150,
        cellRenderer: 'genericRendererComponent',
      },
      {
        headerName: 'Country',
        field: 'country',
        width: 120,
        lockPosition: true,
        suppressNavigable: true,
        rowDrag: true,
      },
      {
        headerName: 'Year',
        field: 'year',
        width: 90,
      },
      {
        headerName: 'Date',
        field: 'date',
        width: 110,
      },
      {
        headerName: 'Sport',
        field: 'sport',
        width: 110,
      },
      {
        headerName: 'Gold',
        field: 'gold',
        width: 100,
      },
      {
        headerName: 'Silver',
        field: 'silver',
        width: 100,
      },
      {
        headerName: 'Bronze',
        field: 'bronze',
        width: 100,
      },
      {
        headerName: 'Total',
        field: 'total',
        width: 100,
      },
    ];
    this.frameworkComponents = {
      genericRendererComponent: GenericRendererComponent,
    };
  }

  onGridReady($event: AgGridEvent) {
    this.gridApi = $event;
    this.gridColumnApi = $event.columnApi;
    this.http
      .get(
        'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json'
      )
      .subscribe((data: any[]) => {
        $event.api.setRowData(data);
      });
  }
}
