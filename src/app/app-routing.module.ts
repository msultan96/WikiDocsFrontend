import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ErrorLandingComponent } from './shared/error-landing/error-landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
		path:'error',
		component:ErrorLandingComponent,
		data: { title: 'Uh Oh'}
	},
	{
		path: '',
		component: LoginComponent,
		data: { title: 'Login' }
	},
	{
		path: 'register',
		component:RegisterComponent,
		data: { title: 'Register' }
	},
	{
		path: 'User',
		component: UserComponent,
		canActivate: [AuthGuard]		
	},
	{
		path: 'Admin',
		component: UserComponent,
		canActivate: [AuthGuard]		
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
