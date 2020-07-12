import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoryWrapperComponent } from './story-wrapper/story-wrapper.component';
import { ChangesTestComponent } from './changes-test/changes-test.component';
import { InputDecoratorTesterComponent } from './input-decorator-tester/input-decorator-tester.component';
import { OutputHandlerDirective } from './output-handler.directive';

@NgModule({
  declarations: [
    AppComponent,
    StoryWrapperComponent,
    ChangesTestComponent,
    InputDecoratorTesterComponent,
    OutputHandlerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ChangesTestComponent,
    InputDecoratorTesterComponent
  ],
  // needed for easy use in storybook
  // TODO: REMOVE!
  exports:[
    AppComponent,
    StoryWrapperComponent,
    ChangesTestComponent,
    InputDecoratorTesterComponent
  ]
})
export class AppModule { }
