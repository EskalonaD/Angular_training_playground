import { StoryReturn, BuildStories } from 'src/model';
import { InputDecoratorTesterComponent } from './input-decorator-tester.component';
import { StoryWrapperComponent } from '../story-wrapper/story-wrapper.component';
import { AppModule } from '../app.module';
import {moduleMetadata } from '@storybook/angular'

// export default {title: 'Input Decorator and Change Detection test'};

//for templated stories
export default {
    title: 'Input Decorator and Change Detection test',
    decorators: [
        moduleMetadata ({
            /**
             * current behavior works because of appModule exports prop, without it we need to use dynamicModule and storybook module, mb with
             * declarations: [
             *    InputDecoratorTesterComponent
             * ],
             */
            imports: [AppModule]
        })
    ]
};
const fillInputToStories = (inputs: any): StoryReturn => ({
    component: StoryWrapperComponent,
    props: {
        inputs,
        component: InputDecoratorTesterComponent,
    },
    moduleMetadata: {

        imports: [AppModule]
    }
})

export const componentWithoutInputs: BuildStories = () => fillInputToStories({});
export const componentWithDecoratedInputs: BuildStories = () => fillInputToStories({decoratedInput: 'someData'});



export const base = () => ({
    component: InputDecoratorTesterComponent,
    props: {
        inputs: {decoratedInput: 'someInput'}
    },
    moduleMetadata: {}
})

export const baseWithTemplate = () => ({
    template: `<app-input-decorator-tester decoratedInput='someInput'></app-input-decorator-tester>`,
})
