import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule} from "@angular/material/form-field";
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { ContentViewComponent } from './layout/content-view/content-view.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    BreadcrumbsComponent,
    ContentViewComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatSelectModule,MatMenuModule,
    MatListModule, MatBadgeModule,
    MatButtonModule,MatTableModule,MatRadioModule,MatCheckboxModule,
    RouterModule,MatFormFieldModule,MatInputModule,MatPaginatorModule

  ],
  exports: [
    TopbarComponent,
    SidebarComponent, FormsModule, ReactiveFormsModule,
    MatSelectModule,
    MatTabsModule,MatCheckboxModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatTooltipModule,MatTableModule,MatBadgeModule,MatRadioModule,MatMenuModule,
    MatIconModule,ContentViewComponent,MatInputModule,MatPaginatorModule,
    MatListModule,MatButtonModule,BreadcrumbsComponent,MatFormFieldModule
  ]
})
export class SharedModule { }
