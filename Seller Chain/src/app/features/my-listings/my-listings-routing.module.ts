import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingMainComponent } from './listing-main/listing-main.component';
import { ListingsComponent } from './listings/listings.component';

const routes: Routes = [
  {
    path: '',
    component:ListingMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyListingsRoutingModule { }
