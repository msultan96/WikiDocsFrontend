import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ArticleRoutingModule } from './article-routing.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
    declarations: [
        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ArticleRoutingModule,
        CKEditorModule
    ],
    providers: [
       
    ],
    exports: []

})
export class ArticleModule {

}