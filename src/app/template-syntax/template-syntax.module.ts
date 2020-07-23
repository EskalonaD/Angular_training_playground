import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { InterpolationComponent } from './interpolation/interpolation.component';



@NgModule({
  declarations: [MainComponent, InterpolationComponent],
  imports: [
    CommonModule
  ]
})
export class TemplateSyntaxModule { }
