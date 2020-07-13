import { ChangesTestComponent } from './changes-test.component';
import { StoryWrapperComponent } from '../story-wrapper/story-wrapper.component';
import { StoryReturn } from 'src/model';
import { StorybookModule } from '../../../.storybook/module';
import { MODULE_METADATA } from '../../../.storybook/moduleMetadata';
import { AppModule } from '../app.module';

export default { title: 'On Changes Test' };

export const onChanges = (): StoryReturn => {
    const inputs = {data: 'someData'};
    return {
        moduleMetadata: {
            imports: [AppModule]
        },
        component: StoryWrapperComponent,
        props: {
            component: ChangesTestComponent,
            inputs,
            outputs: {
                // click: (value) => console.log(this),
                click: function(value) {console.log(inputs); inputs.data = 'newData'},
            }
        },

    }
}
