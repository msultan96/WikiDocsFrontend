import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ApprovedArticlesComponent } from './approved-articles/approved-articles.component';
import { BetaArticlesComponent } from './beta-articles/beta-articles.component';
import { UserComponent } from './user.component';
import { CreateArticleComponent } from './create-article/create-article.component';

const routes: Routes = [
  { path: 'user', component: UserComponent,
  children: [
    {
      path: '',
      children: [
        { path: 'articles/create', component: CreateArticleComponent },
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
export class UserRoutingModule { }