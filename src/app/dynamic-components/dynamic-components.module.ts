import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDecoratorTesterComponent } from '../input-decorator-tester/input-decorator-tester.component';
import { SharedModule } from '../shared/shared.module';

const declaratedEntities = [InputDecoratorTesterComponent]

@NgModule({
  declarations: [...declaratedEntities],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [...declaratedEntities, SharedModule],
  entryComponents: [...declaratedEntities],
})
export class DynamicComponentsModule { }
