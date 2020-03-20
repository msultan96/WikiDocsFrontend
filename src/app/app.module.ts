import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user/user-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppGuard } from './app.guard';
import { ErrorLandingComponent } from './shared/error-landing/error-landing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    SignUpComponent,
    ErrorLandingComponent,
    ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    UserRoutingModule,
    AdminRoutingModule,
	FontAwesomeModule,
	InfiniteScrollModule
  ],
  providers: [AppGuard],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
