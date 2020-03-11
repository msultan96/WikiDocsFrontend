import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ErrorLandingComponent } from './shared/error-landing/error-landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'error',component:ErrorLandingComponent},
  { path: '',   component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
