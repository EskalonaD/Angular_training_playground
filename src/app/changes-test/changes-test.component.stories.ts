import { ChangesTestComponent } from './changes-test.component';
import { StoryWrapperComponent } from '../story-wrapper/story-wrapper.component';
import { StoryReturn } from 'src/model';

export default { title: 'On Changes Test' };

export const onChanges = (): StoryReturn => {
    return {
        component: StoryWrapperComponent,
        inputs: {
            component: ChangesTestComponent,
            inputs: { data: 'someData' },
            outputs: {}
        }

    }
}
