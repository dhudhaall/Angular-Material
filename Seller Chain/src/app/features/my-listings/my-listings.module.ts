import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from 'src/app/shared/shared.module';
import { MyListingsRoutingModule } from './my-listings-routing.module';
import { ListingsComponent } from './listings/listings.component';
import { FiltersListingsComponent } from './filters-listings/filters-listings.component';
import { ListingMainComponent } from './listing-main/listing-main.component';


@NgModule({
  declarations: [
    ListingsComponent,
    FiltersListingsComponent,
    ListingMainComponent
  ],
  imports: [
    CommonModule,
    MyListingsRoutingModule,SharedModule
  ]
})
export class MyListingsModule { }
