import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoxContentRoutingModule } from './box-content-routing.module';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardComponent } from './dashboard-main/dashboard/dashboard.component';
import { FilterCntent1Component } from './dashboard-main/filter-cntent1/filter-cntent1.component';
import { BoxContentPopupsComponent } from './dashboard-main/box-content-popups/box-content-popups.component';
import { AddEmptyBoxPopupComponent } from './dashboard-main/add-empty-box-popup/add-empty-box-popup.component';


@NgModule({
  declarations: [
    DashboardMainComponent,
    DashboardComponent,
    FilterCntent1Component,
    BoxContentPopupsComponent,
    AddEmptyBoxPopupComponent
  ],
  imports: [
    CommonModule,
    BoxContentRoutingModule,
    SharedModule
  ]
})
export class BoxContentModule { }
