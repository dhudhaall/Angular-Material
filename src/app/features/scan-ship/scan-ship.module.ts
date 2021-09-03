import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from 'src/app/shared/shared.module';
import { ScanShipRoutingModule } from './scan-ship-routing.module';
import { AddItemComponent } from './add-item-main/add-item/add-item.component';
import { AddItemMainComponent } from './add-item-main/add-item-main.component';
import { AddItemFiltersComponent } from './add-item-main/add-item-filters/add-item-filters.component';
import { NewAddItemComponent } from './new-add-item-main/new-add-item/new-add-item.component';
import { ShipmentPileComponent } from './shipment-pile-main/shipment-pile/shipment-pile.component';
import { CreateNewSellerOfferDialogComponent } from './new-add-item-main/create-new-seller-offer-dialog/create-new-seller-offer-dialog.component';
import { Step1Component } from './shipment-pile-main/step1/step1.component';
import { Step2Component } from './shipment-pile-main/step2/step2.component';
import { NewAddItemMainComponent } from './new-add-item-main/new-add-item-main.component';
import { NewAddItemFiltersComponent } from './new-add-item-main/new-add-item-filters/new-add-item-filters.component';
import { ShipmentPileMainComponent } from './shipment-pile-main/shipment-pile-main.component';
import { ShipmentPileFiltersComponent } from './shipment-pile-main/shipment-pile-filters/shipment-pile-filters.component';


@NgModule({
  declarations: [
    AddItemComponent,
    AddItemMainComponent,
    AddItemFiltersComponent,
    NewAddItemComponent,
    ShipmentPileComponent,
    CreateNewSellerOfferDialogComponent,
    Step1Component,
    Step2Component,
    NewAddItemMainComponent,
    NewAddItemFiltersComponent,
    ShipmentPileMainComponent,
    ShipmentPileFiltersComponent,
    
  ],
  imports: [
    CommonModule,SharedModule,
    ScanShipRoutingModule
  ]
})
export class ScanShipModule { }
