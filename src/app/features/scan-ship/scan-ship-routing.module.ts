import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item-main/add-item/add-item.component';

const routes: Routes = [
  {
    path: 'addItem',
    component:AddItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScanShipRoutingModule { }
