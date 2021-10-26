import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppsListingComponent } from './apps-listing/apps-listing.component';
import { SelectPackageComponent } from './select-package/select-package.component';


const routes: Routes = [
  {
    path: '',
    component: AppsListingComponent
  },
  {
    path: 'select',
    component: SelectPackageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSuiteRoutingModule { }
