import { ChangesTestComponent } from './changes-test.component';
// import { StoryWrapperComponent } from '../shared/story-wrapper/story-wrapper.component';
import { StoryReturn } from 'src/model';
// import { StorybookModule } from '../../../.storybook/module';
// import { MODULE_METADATA } from '../../../.storybook/moduleMetadata';
// import { AppModule } from 'src/app/app.module';
import { StoryWrapperComponent } from 'src/app/shared/story-wrapper/story-wrapper.component';
import { NgHooksModule } from '../ng-hooks.module';
// import { AppModule } from '../app.module';

export default { title: 'On Changes Test' };

export const onChanges = (): StoryReturn => {
    const inputs = {data: 'someData'};
    return {
        moduleMetadata: {
            // imports: [NgHooksModule],
            //// @ts-ignore
            declarations: [StoryWrapperComponent, ChangesTestComponent],
            entryComponents: [ChangesTestComponent],
        },
        component: StoryWrapperComponent,
        props: {
            component: ChangesTestComponent,
            inputs,
            outputs: {
                // click: (value) => console.log(this),
                click: function(value) { console.log('here', inputs); inputs.data = 'newData'},
            }
        },

    }
}
