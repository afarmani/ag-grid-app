import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ICellRendererParams} from "ag-grid-community";

@Component({
  selector: 'app-generic-renderer',
  templateUrl: './generic-renderer.component.html',
  styleUrls: ['./generic-renderer.component.scss']
})
export class GenericRendererComponent implements OnInit, ICellRendererAngularComp {

  cellValue:any
  constructor() { }

  ngOnInit(): void {
  }

  agInit(params: ICellRendererParams): void {
    this.cellValue=params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    this.cellValue=params.value;
    return true;
  }
}
