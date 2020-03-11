import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ApprovedArticlesComponent } from './approved-articles/approved-articles.component';
import { BetaArticlesComponent } from './beta-articles/beta-articles.component';
import { UserComponent } from './user.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { AllApprovedArticlesComponent } from './all-approved-articles/all-approved-articles.component';
import { InitialArticlesComponent } from './initial-articles/initial-articles.component';
import { RejectedArticlesComponent } from './rejected-articles/rejected-articles.component';
import { DiscardedArticlesComponent } from './discarded-articles/discarded-articles.component';


const routes: Routes = [
  { path: 'User', component: UserComponent,
  children: [
    {
      path: '',
      children: [
        { path: 'Articles/All/Approved', component:  AllApprovedArticlesComponent},
        { path: 'Articles/Your/All', component: AllArticlesComponent },
        { path: 'Articles/Your/Approved', component: ApprovedArticlesComponent },
        { path: 'Articles/Your/Beta', component: BetaArticlesComponent },
        { path: 'Articles/Your/Initial', component: InitialArticlesComponent },
        { path: 'Articles/Your/Rejected', component: RejectedArticlesComponent },
        { path: 'Articles/Your/Discarded', component: DiscardedArticlesComponent },
        { path: 'Articles/Your/New', component: CreateArticleComponent }
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