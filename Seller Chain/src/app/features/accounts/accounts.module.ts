import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule, SharedModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
