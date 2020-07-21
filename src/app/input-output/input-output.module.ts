import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


const declaratedEntities = [];

@NgModule({
  declarations: [...declaratedEntities],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [...declaratedEntities]
})
export class InputOutputModule { }
