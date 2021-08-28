import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardFiltersComponent } from './dashboard-filters/dashboard-filters.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMainComponent,
    DashboardFiltersComponent
  ],
  imports: [
    CommonModule,SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
