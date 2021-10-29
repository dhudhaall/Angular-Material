import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoxContentRoutingModule } from './box-content-routing.module';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardComponent } from './dashboard-main/dashboard/dashboard.component';
import { FilterCntent1Component } from './dashboard-main/filter-cntent1/filter-cntent1.component';
import { BoxContentPopupsComponent } from './dashboard-main/box-content-popups/box-content-popups.component';
import { AddEmptyBoxPopupComponent } from './dashboard-main/add-empty-box-popup/add-empty-box-popup.component';
import { ManiFestPopupComponent } from './dashboard-main/mani-fest-popup/mani-fest-popup.component';
import { BoxContentDetailsComponent } from './box-content-details/box-content-details.component';
import { BoxContentDetailsMainComponent } from './box-content-details/box-content-details-main/box-content-details-main.component';
import { BoxContenFilterComponent } from './box-content-details/box-conten-filter/box-conten-filter.component';
import { BoxContentDetailspopupsComponent } from './box-content-details/box-content-detailspopups/box-content-detailspopups.component';
import { WarningPopupComponent } from './box-content-details/warning-popup/warning-popup.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoxAddpopupComponent } from './box-content-details/box-addpopup/box-addpopup.component';

import { BoxTemplatesMainComponent } from './box-templates-main/box-templates-main.component';
import { BoxTemplatesComponent } from './box-templates-main/box-templates/box-templates.component';
import { TemplatsFilterComponent } from './box-templates-main/templats-filter/templats-filter.component';
import { BoxSetupComponent } from './box-content-details/box-setup/box-setup.component';
import { AddEmptyPopupComponent } from './box-content-details/add-empty-popup/add-empty-popup.component';
import { SingleBoxViewMainComponent } from './single-box-view-main/single-box-view-main.component';
import { SingleBoxViewComponent } from './single-box-view-main/single-box-view/single-box-view.component';
import { SingleBoxFiltersComponent } from './single-box-view-main/single-box-filters/single-box-filters.component'

@NgModule({
  declarations: [
    DashboardMainComponent,
    DashboardComponent,
    FilterCntent1Component,
    BoxContentPopupsComponent,
    AddEmptyBoxPopupComponent,
    ManiFestPopupComponent,
    BoxContentDetailsComponent,
    BoxContentDetailsMainComponent,
    BoxContenFilterComponent,
    BoxContentDetailspopupsComponent,
    WarningPopupComponent,
    BoxAddpopupComponent,
    TemplatsFilterComponent,

    BoxTemplatesMainComponent,
    BoxTemplatesComponent,
    BoxSetupComponent,
    AddEmptyPopupComponent,
    SingleBoxViewMainComponent,
    SingleBoxViewComponent,
    SingleBoxFiltersComponent
  ],
  imports: [
    CommonModule,
    BoxContentRoutingModule,
    SharedModule,
    DragDropModule
  ]
})
export class BoxContentModule { }
