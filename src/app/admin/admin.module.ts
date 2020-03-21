import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { BetaArticlesComponent } from './beta-articles/beta-articles.component';
import { ApprovedArticlesComponent } from './approved-articles/approved-articles.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { SharedPipesModule } from '../shared/pipes/shared-pipes/shared-pipes.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
    declarations: [
        ApprovedArticlesComponent,
        BetaArticlesComponent,
        AllArticlesComponent,
],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AdminRoutingModule,
				SharedPipesModule,
				InfiniteScrollModule
    ],
    providers: [
    ],
    exports: []

})
export class AdminModule {

}

