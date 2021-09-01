import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemMainComponent } from './add-item-main/add-item-main.component';
import { AddItemComponent } from './add-item-main/add-item/add-item.component';
import { NewAddItemComponent } from './add-item-main/new-add-item/new-add-item.component';
import { ShipmentPileComponent } from './add-item-main/shipment-pile/shipment-pile.component';

const routes: Routes = [
  {
    path: 'addItem',
    component:AddItemMainComponent
  }
  ,
  {
    path: 'newaddItem',
    component:NewAddItemComponent
  }
  ,{
    path: 'shipmentpils',
    component:ShipmentPileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScanShipRoutingModule { }
