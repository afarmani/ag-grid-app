import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {GridApiCallComponent} from "./component/grid-api-call/grid-api-call.component";

const routes: Routes = [
  { path: 'grid-api-call', component: GridApiCallComponent }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
