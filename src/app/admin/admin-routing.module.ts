import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprovedArticlesComponent } from  './approved-articles/approved-articles.component';
import { BetaArticlesComponent } from './beta-articles/beta-articles.component';
import { AdminComponent } from './admin.component';
import { LoginComponent } from '../login/login.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'articles/approved', component: ApprovedArticlesComponent },
          { path: 'articles/beta', component: BetaArticlesComponent }
        ]
      }
    ]
  },
  { path: 'logout', redirectTo: '/login' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }