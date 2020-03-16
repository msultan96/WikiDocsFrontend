import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from '../sign-up/sign-up.component';



const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class LoginRoutingModule { }