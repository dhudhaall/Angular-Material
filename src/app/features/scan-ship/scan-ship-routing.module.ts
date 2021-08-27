import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemMainComponent } from './add-item-main/add-item-main.component';
import { AddItemComponent } from './add-item-main/add-item/add-item.component';

const routes: Routes = [
  {
    path: 'addItem',
    component:AddItemMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScanShipRoutingModule { }
