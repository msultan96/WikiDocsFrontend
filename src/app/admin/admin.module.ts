import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { BetaArticlesComponent } from './beta-articles/beta-articles.component';
import { ApprovedArticlesComponent } from './approved-articles/approved-articles.component';


@NgModule({
    declarations: [
        ApprovedArticlesComponent,
        BetaArticlesComponent
        
],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AdminRoutingModule
    ],
    providers: [
       
    ],
    exports: []

})
export class AdminModule {

}

