import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprovedArticlesComponent } from  './approved-articles/approved-articles.component';
import { BetaArticlesComponent } from './beta-articles/beta-articles.component';
import { AdminComponent } from './admin.component';
import { LoginComponent } from '../login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  { path: 'Admin', component: AdminComponent,
    children: [
      {
				path: '',
				canActivate: [AuthGuard],
        children: [
          { path: 'Articles/All', component: AllArticlesComponent },
          { path: 'Articles/Approved', component: ApprovedArticlesComponent },
          { path: 'Articles/Beta', component: BetaArticlesComponent }
        ]
      }
    ]
  },
  { path: 'logout', redirectTo: '/login' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }