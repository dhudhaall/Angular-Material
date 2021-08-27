import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShipmentHistoryRoutingModule } from './shipment-history-routing.module';
import { ShipmentListingComponent } from './shipment-listing/shipment-listing.component';
import { ShipmentFiltersComponent } from './shipment-filters/shipment-filters.component';
import { ShipmentMainComponent } from './shipment-main/shipment-main.component';


@NgModule({
  declarations: [
    ShipmentListingComponent,
    ShipmentFiltersComponent,
    ShipmentMainComponent
  ],
  imports: [
    CommonModule,SharedModule,
    ShipmentHistoryRoutingModule
  ]
})
export class ShipmentHistoryModule { }
