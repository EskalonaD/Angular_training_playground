import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { StoryWrapperComponent } from './story-wrapper/story-wrapper.component';
// import { ChangesTestComponent } from './changes-test/changes-test.component';
import { InputDecoratorTesterComponent } from './input-decorator-tester/input-decorator-tester.component';
import { OutputHandlerDirective } from './output-handler.directive';
import { SharedModule } from './shared/shared.module';
// import { MainComponent } from './main/main.component';
// import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    // StoryWrapperComponent,
    // ChangesTestComponent,
    // InputDecoratorTesterComponent,
    OutputHandlerDirective,
    // MainComponent,
    // ButtonComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    // ChangesTestComponent,
    // InputDecoratorTesterComponent
  ],
  // needed for easy use in storybook
  // TODO: REMOVE!
  exports:[
    // AppComponent,
    // StoryWrapperComponent,
    // ChangesTestComponent,
    // InputDecoratorTesterComponent
  ]
})
export class AppModule { }
