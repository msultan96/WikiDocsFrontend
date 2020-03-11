import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { AdminModule } from './admin/admin.module';


import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { BetaArticlesComponent } from './admin/beta-articles/beta-articles.component';
import { ApprovedArticlesComponent } from './admin/approved-articles/approved-articles.component';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user/user-routing.module';
import { EditorModule } from './editor/editor.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppGuard } from './app.guard';
import { ErrorLandingComponent } from './shared/error-landing/error-landing.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    ErrorLandingComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ArticleModule,
    AdminModule,
    CKEditorModule,
    EditorModule,
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
