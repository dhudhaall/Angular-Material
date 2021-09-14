import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShipmentHistoryRoutingModule } from './shipment-history-routing.module';
import { ShipmentListingComponent } from './shipment-listing/shipment-listing.component';
import { ShipmentFiltersComponent } from './shipment-filters/shipment-filters.component';
import { ShipmentMainComponent } from './shipment-main/shipment-main.component';
import { ShipmentDetailsMainComponent } from './shipment-details-main/shipment-details-main.component';
import { ShipmentDetailsComponent } from './shipment-details-main/shipment-details/shipment-details.component';


@NgModule({
  declarations: [
    ShipmentListingComponent,
    ShipmentFiltersComponent,
    ShipmentMainComponent,ShipmentDetailsComponent,
    ShipmentDetailsMainComponent
  ],
  imports: [
    CommonModule,SharedModule,
    ShipmentHistoryRoutingModule
  ]
})
export class ShipmentHistoryModule { }
