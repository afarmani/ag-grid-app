import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GridApiCallComponent } from './component/grid-api-call/grid-api-call.component';
import { CellRenderingComponent } from './component/cell-rendering/cell-rendering.component';
import { GenericRendererComponent } from './component/grid-api-call/cells/generic-renderer/generic-renderer.component';

@NgModule({
  declarations: [AppComponent, GridApiCallComponent, CellRenderingComponent, GenericRendererComponent],
  imports: [
    BrowserModule,
    //withComponents is necessary grid to use customized angular components for particular cells.
    AgGridModule.withComponents([GenericRendererComponent]),
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
