import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxContentDetailsComponent } from './box-content-details/box-content-details.component';

import { BoxTemplatesMainComponent } from './box-templates-main/box-templates-main.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardMainComponent
  }
  ,
  {
    path: 'contentdetail',
    component: BoxContentDetailsComponent
  }
  ,
  {
    path: 'templates',
    component: BoxTemplatesMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxContentRoutingModule { }
