import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { ContentViewComponent } from './layout/content-view/content-view.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatCardModule, } from '@angular/material/card';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ResizableModule } from 'angular-resizable-element';
import { ClickToShowDirective } from './directives/click-to-show.directive';
@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    BreadcrumbsComponent,
    ContentViewComponent,
    ClickToShowDirective
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatTooltipModule, MatCardModule,
    MatIconModule, IvyCarouselModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatSelectModule, MatMenuModule,
    MatListModule, MatBadgeModule, MatCarouselModule.forRoot(),
    MatButtonModule, MatTableModule, MatRadioModule, MatCheckboxModule,
    RouterModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, ResizableModule,

  ],
  exports: [
    TopbarComponent,
    SidebarComponent, FormsModule, ReactiveFormsModule,
    MatSelectModule, MatCardModule, IvyCarouselModule,
    MatDialogModule,
    MatTabsModule, MatCheckboxModule,
    MatSlideToggleModule,
    MatExpansionModule, MatCarouselModule,
    MatTooltipModule, MatTableModule, MatBadgeModule, MatRadioModule, MatMenuModule,
    MatIconModule, ContentViewComponent, MatInputModule, MatPaginatorModule,
    MatListModule, MatButtonModule, BreadcrumbsComponent, MatFormFieldModule, ClickToShowDirective
  ]
})
export class SharedModule { }
