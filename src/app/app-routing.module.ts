import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'accounts',
        loadChildren: () => import('./features/accounts/accounts.module').then(m => m.AccountsModule),

      },
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),

      },
      {
        path: 'mylisting',
        loadChildren: () => import('./features/my-listings/my-listings.module').then(m => m.MyListingsModule),

      },
      {
        path: 'shipmentHistory',
        loadChildren: () => import('./features/shipment-history/shipment-history.module').then(m => m.ShipmentHistoryModule),
      },
      {
        path: 'scanship',
        loadChildren: () => import('./features/scan-ship/scan-ship.module').then(m => m.ScanShipModule),
      },
      {
        path: 'boxcontent',
        loadChildren: () => import('./features/box-content/box-content.module').then(m => m.BoxContentModule),
      }
      ,
      {
        path: '**',
        redirectTo: 'accounts',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
