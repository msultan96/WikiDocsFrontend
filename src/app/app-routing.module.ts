import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { Customer } from './customer/customer';

import { AppComponent } from './app.component';
import { GuardserviceService } from './guardservice.service';


const routes: Routes = [

  
  {path:'customer',component:CustomerComponent,canActivate:[GuardserviceService]},
  {path:'customer/:id',component:CustomerComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{

 }
