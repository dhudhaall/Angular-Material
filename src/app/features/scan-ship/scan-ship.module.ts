import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from 'src/app/shared/shared.module';
import { ScanShipRoutingModule } from './scan-ship-routing.module';
import { AddItemComponent } from './add-item-main/add-item/add-item.component';
import { AddItemMainComponent } from './add-item-main/add-item-main.component';
import { AddItemFiltersComponent } from './add-item-main/add-item-filters/add-item-filters.component';


@NgModule({
  declarations: [
    AddItemComponent,
    AddItemMainComponent,
    AddItemFiltersComponent
  ],
  imports: [
    CommonModule,SharedModule,
    ScanShipRoutingModule
  ]
})
export class ScanShipModule { }
