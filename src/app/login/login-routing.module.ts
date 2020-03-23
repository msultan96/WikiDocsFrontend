import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';



const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class LoginRoutingModule { }