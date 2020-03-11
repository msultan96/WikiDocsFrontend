import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortDescriptionPipe } from '../short-description.pipe';



@NgModule({
  declarations: [ShortDescriptionPipe],
  imports: [
    CommonModule
  ],
  exports:[
    ShortDescriptionPipe
  ]
})
export class SharedPipesModule { }
