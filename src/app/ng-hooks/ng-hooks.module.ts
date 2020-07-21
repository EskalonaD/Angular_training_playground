import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangesTestComponent } from './changes-test/changes-test.component';
import { SharedModule } from '../shared/shared.module';

const declaratedEntities = [ChangesTestComponent];

@NgModule({
  declarations: [...declaratedEntities],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [...declaratedEntities, SharedModule],
  entryComponents: [...declaratedEntities]
})
export class NgHooksModule { }
