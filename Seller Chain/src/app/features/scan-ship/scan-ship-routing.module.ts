import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemMainComponent } from './add-item-main/add-item-main.component';
import { AddToShipmentComponent } from './add-to-shipment/add-to-shipment.component';
import { NewAddItemMainComponent } from './new-add-item-main/new-add-item-main.component';
import { ShipmentDetailsComponent } from '../shipment-history/shipment-details-main/shipment-details/shipment-details.component';
import { ShipmentPileMainComponent } from './shipment-pile-main/shipment-pile-main.component';
import { ShipmentPileComponent } from './shipment-pile-main/shipment-pile/shipment-pile.component';
import { BulkUploadViewComponent } from './bulk-uploads/bulk-upload-view/bulk-upload-view.component';
import { SubmitBulkUploadPopupComponent } from './bulk-uploads/submit-bulk-upload-popup/submit-bulk-upload-popup.component';
import { BulkUploadHistoryComponent } from './bulk-uploads/bulk-upload-history/bulk-upload-history.component';
import { BulkItemDetailComponent } from './bulk-uploads/bulk-item-detail/bulk-item-detail.component';
import { ScanshipDashbordMainComponent } from './scanship-dashbord-main/scanship-dashbord-main.component';

const routes: Routes = [
  {
    path: 'addItem',
    component: AddItemMainComponent
  },
  {
    path: 'newaddItem',
    component: NewAddItemMainComponent
  },
  {
    path: 'shipmentpile',
    component: ShipmentPileMainComponent
  },
  {
    path: 'addtoshipment',
    component: AddToShipmentComponent
  },
  {
    path: 'bulkupload',
    component: BulkUploadViewComponent
  },
  {
    path: 'bulkpopup',
    component: SubmitBulkUploadPopupComponent
  }
  ,
  {
    path: 'bulkhistory',
    component: BulkUploadHistoryComponent
  }
  ,
  {
    path: 'bulkhdetail',
    component: BulkItemDetailComponent
  }
  ,

  {
    path: 'dashboard',
    component: ScanshipDashbordMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScanShipRoutingModule { }
