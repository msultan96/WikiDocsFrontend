import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { BetaArticlesComponent } from './beta-articles/beta-articles.component';
import { ApprovedArticlesComponent } from './approved-articles/approved-articles.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { RejectedArticlesComponent } from './rejected-articles/rejected-articles.component';
import { InitialArticlesComponent } from './initial-articles/initial-articles.component';
import { DiscardedArticlesComponent } from './discarded-articles/discarded-articles.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { AllApprovedArticlesComponent } from './all-approved-articles/all-approved-articles.component';
import { SharedPipesModule } from '../shared/pipes/shared-pipes/shared-pipes.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ArticleViewerComponent } from './article-viewer/article-viewer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { InvitedArticlesComponent } from './invited-articles/invited-articles.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        CreateArticleComponent,
        ApprovedArticlesComponent,
        BetaArticlesComponent,
        RejectedArticlesComponent,
        InitialArticlesComponent,
        DiscardedArticlesComponent,
        AllArticlesComponent,
        AllApprovedArticlesComponent,
        ArticleViewerComponent,
        InvitedArticlesComponent,
],
    imports: [
        AppRoutingModule,
        RouterModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedPipesModule,
				InfiniteScrollModule,
				NgbModule
        
    ],
    providers: [
    ],
    exports: []

})
export class UserModule {

}
