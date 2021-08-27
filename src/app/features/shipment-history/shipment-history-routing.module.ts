import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentMainComponent } from './shipment-main/shipment-main.component';

const routes: Routes = [
   {
      path: '',
      component: ShipmentMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentHistoryRoutingModule { }
