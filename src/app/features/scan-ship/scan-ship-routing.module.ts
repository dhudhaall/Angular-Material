import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemMainComponent } from './add-item-main/add-item-main.component';
import { AddToShipmentComponent } from './add-to-shipment/add-to-shipment.component';
import { NewAddItemMainComponent } from './new-add-item-main/new-add-item-main.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';
import { ShipmentPileMainComponent } from './shipment-pile-main/shipment-pile-main.component';
import { ShipmentPileComponent } from './shipment-pile-main/shipment-pile/shipment-pile.component';

const routes: Routes = [
  {
    path: 'addItem',
    component:AddItemMainComponent
  },
  {
    path: 'newaddItem',
    component:NewAddItemMainComponent
  },
  {
    path: 'shipmentpile',
    component:ShipmentPileMainComponent
  }
  ,
  {
    path:'addtoshipment',
    component:AddToShipmentComponent
  }
  ,
  {
    path:'shpmentdetail',
    component:ShipmentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScanShipRoutingModule { }
