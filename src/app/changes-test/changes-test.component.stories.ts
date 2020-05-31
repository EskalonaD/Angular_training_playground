import { ChangesTestComponent } from './changes-test.component';
import { StoryWrapperComponent } from '../story-wrapper/story-wrapper.component';
import { StoryReturn } from 'src/model';

export default { title: 'On Changes Test' };

export const onChanges = (): StoryReturn => {
    return <any>{
        component: StoryWrapperComponent,
        props: {
            component: ChangesTestComponent,
            inputs: { data: 'someData' },
            outputs: {}
        }

    }
}
