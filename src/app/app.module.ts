import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { AdminModule } from './admin/admin.module';


import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { BetaArticlesComponent } from './admin/beta-articles/beta-articles.component';
import { ApprovedArticlesComponent } from './admin/approved-articles/approved-articles.component';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user/user-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    EditorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ArticleModule,
    AdminModule,
    CKEditorModule,
    FormsModule,
    LoginRoutingModule,
    UserRoutingModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
