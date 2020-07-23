import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingComponentComponent } from './routing-component/routing-component.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MainComponent } from './main/main.component';


const routes = [
  { path: '**', component: RoutingComponentComponent }
]
@NgModule({
  declarations: [RoutingComponentComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule
    // RouterTestingModule
  ],
  // imports:
  //   [
  //     RouterTestingModule.withRoutes([
  //       { path: '**', component: RoutingComponentComponent },
  //     ]),
  //     CommonModule,
  //   ],
  exports: [RouterModule, MainComponent]  //delete?
})
export class TempModule { }
