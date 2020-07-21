// import { NgModule, APP_INITIALIZER, ModuleWithProviders } from "@angular/core";
// import { StoryWrapperComponent } from 'src/app/story-wrapper/story-wrapper.component';
// import { ChangesTestComponent } from 'src/app/changes-test/changes-test.component';
// import { CommonModule } from '@angular/common';

// @NgModule({
//     // declarations: [StoryWrapperComponent, ChangesTestComponent],
//     // providers: [],
//     // entryComponents: [ChangesTestComponent],
//     imports: [        CommonModule,
//     ],
// })
// export class StorybookModule {
//     static forChild(): ModuleWithProviders {
//         return {
//             ngModule: StorybookModule,
//             providers: [
//                 {
//                     provide: APP_INITIALIZER,    // for using before app initialization;
//                     multi: true,
//                     deps: [],
//                     useFactory: () => () => null,
//                 },
//             ],
//         };
//     }
// }
