import { StoryReturn, BuildStories } from 'src/model';
import { InputDecoratorTesterComponent } from './input-decorator-tester.component';
import { StoryWrapperComponent } from '../shared/story-wrapper/story-wrapper.component';
// import { AppModule } from '../app.module';
import { moduleMetadata } from '@storybook/angular'
import { DynamicComponentsModule } from '../dynamic-components/dynamic-components.module';
import { ButtonComponent } from '../shared/button/button.component';
import { Component, ViewChild, ViewContainerRef, ComponentRef, AfterViewInit } from '@angular/core';

// export default {title: 'Input Decorator and Change Detection test'};

//for templated stories
export default {
    title: 'Input Decorator and Change Detection test',
    decorators: [
        moduleMetadata({
            /**
             * current behavior works because of appModule exports prop, without it we need to use dynamicModule and storybook module, mb with
             * declarations: [
             *    InputDecoratorTesterComponent
             * ],
             */


            // imports: [DynamicComponentsModule]
            declarations: [StoryWrapperComponent, ButtonComponent, InputDecoratorTesterComponent],
            // entryComponents: [InputDecoratorTesterComponent]

        })
    ]
};
const fillInputToStories = (inputs: any): StoryReturn => ({
    component: StoryWrapperComponent,
    props: {
        inputs,
        component: InputDecoratorTesterComponent,
        outputs: {
            decoratedInputChange: () => { inputs.decoratedInput = 'someData1'; console.log('decoratedInputChange handled'); console.log(inputs) },
            undecoratedInputChange: () => console.log('undecoratedInputChange handled'),
            decoratedInputChangeViaViewChild: () => console.log('decoratedInputChangeViaViewChild handled')
        }
    },
    moduleMetadata: {
        declarations: [StoryWrapperComponent, ButtonComponent, InputDecoratorTesterComponent],
        entryComponents: [InputDecoratorTesterComponent]
    }
})

export const componentWithoutInputs: BuildStories = () => fillInputToStories({});
export const componentWithDecoratedInputs: BuildStories = () => fillInputToStories({ decoratedInput: 'someData' });


/**
 * for storybookk options
 */
// export const base = () => ({
//     component: InputDecoratorTesterComponent,
//     props: {
//         inputs: {decoratedInput: 'someInput'},
//     },
//     moduleMetadata: {}
// })


// export const baseWithTemplate = () => ({
//     template: `<app-input-decorator-tester decoratedInput='someInput'></app-input-decorator-tester>`,
// })

@Component({

    template: '<app-input-decorator-tester #component1 [decoratedInput]="decoratedInput" (output)="output($event)"></app-input-decorator-tester>',
}
    // selector: 'some-selector',
)
class Wrapper implements AfterViewInit {
    count: number = 0;
    decoratedInput: string;
    undecoratedInput: string;
    input: string = 'data';
    @ViewChild(InputDecoratorTesterComponent, {static: false, read: ViewContainerRef}) inputComponent: ViewContainerRef;
    // @ViewChild('app-input-decorator-tester', {static: false, read: ViewContainerRef}) inputComponent: ViewContainerRef;
    // @ViewChild('component1', {static: false, read: ViewContainerRef}) inputComponent: ViewContainerRef;
    output(event) {
        console.log('wrapper handle', event);

        if(event.event === 'decoratedInputChange') {
            this.count++;
            this.decoratedInput = `${this.input} ${this.count}`;
            // @ts-ignore
        }
        if(event.event === 'decoratedInputChangeViaViewChild') {
            this.count++;
            // @ts-ignore
            this.inputComponent._data.componentView.component.decoratedInput/*.instance.undecoratedInput*/ = `${this.input} ${this.count}`;
        }

        if(event.event === 'undecoratedInputChange') {
            this.count++;
            //@ts-ignore
            this.inputComponent._data.componentView.component.undecoratedInput/*.instance.undecoratedInput*/ = `${this.input} ${this.count}`;
            console.log(this.inputComponent)
        }
    }

    ngAfterViewInit() {
        // console.log(this.inputComponent)
    }
}


export const base = () => ({
    component: Wrapper,
    props: {
        input: 'string'
    },
    moduleMetadata: {
        declarations: [InputDecoratorTesterComponent]
    }
})
export const baseOnpushStrategy = () => ({
    component: Wrapper,
    props: {
        input: 'string'
    },
    moduleMetadata: {
        declarations: [InputDecoratorTesterComponent]
    }
})
