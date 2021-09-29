import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentDetailsComponent } from './shipment-details-main/shipment-details/shipment-details.component';
import { ShipmentMainComponent } from './shipment-main/shipment-main.component';

const routes: Routes = [
  {
    path: '',
    component: ShipmentMainComponent
  },
  {
    path: ':id',
    component: ShipmentDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentHistoryRoutingModule { }

