import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSuiteRoutingModule } from './app-suite-routing.module';
import { AppsListingComponent } from './apps-listing/apps-listing.component';
import { SelectPackageComponent } from './select-package/select-package.component';


@NgModule({
  declarations: [
    AppsListingComponent,
    SelectPackageComponent
  ],
  imports: [
    CommonModule,
    AppSuiteRoutingModule
  ]
})
export class AppSuiteModule { }
