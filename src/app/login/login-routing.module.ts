import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { ApprovedArticlesComponent } from '../admin/approved-articles/approved-articles.component';
import { BetaArticlesComponent } from '../admin/beta-articles/beta-articles.component';
import { LoginComponent } from './login.component';



const routes: Routes = [
  //{ path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent }
  // { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }