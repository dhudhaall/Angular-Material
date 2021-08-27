import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from 'src/app/shared/shared.module';
import { ScanShipRoutingModule } from './scan-ship-routing.module';
import { AddItemComponent } from './add-item-main/add-item/add-item.component';
import { AddItemMainComponent } from './add-item-main/add-item-main.component';


@NgModule({
  declarations: [
    AddItemComponent,
    AddItemMainComponent
  ],
  imports: [
    CommonModule,SharedModule,
    ScanShipRoutingModule
  ]
})
export class ScanShipModule { }
