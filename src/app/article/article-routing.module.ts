import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from './article.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

const routes: Routes = [
  { path: 'testing', component:ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  FormsModule, ReactiveFormsModule, CKEditorModule],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }