import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CKEditorModule, CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import { EditorModule } from 'src/app/editor/editor.module';

@NgModule({
    declarations: [
        CKEditorComponent
],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CKEditorModule,
        EditorModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [
       
    ]

})
export class CreateArticleModule {

}
