import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { StoryWrapperComponent } from './story-wrapper/story-wrapper.component';


const sharedEntities = [ButtonComponent, StoryWrapperComponent];

@NgModule({
  declarations: [sharedEntities],
  imports: [
    CommonModule
  ],
  exports: [sharedEntities],
})
export class SharedModule { }
