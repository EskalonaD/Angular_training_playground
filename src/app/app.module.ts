import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoryWrapperComponent } from './story-wrapper/story-wrapper.component';
import { ChangesTestComponent } from './changes-test/changes-test.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryWrapperComponent,
    ChangesTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
