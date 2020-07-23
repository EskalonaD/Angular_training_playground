import { RoutingComponentComponent } from './routing-component/routing-component.component';
import { Router, RouterModule } from '@angular/router';
import { TempModule } from './temp.module';
import { APP_BASE_HREF } from '@angular/common';
import { MainComponent } from './main/main.component';
// import { MainComponent } from '../displaying-data/main/main.component';

export default {title: 'storybook + routing'}

export const temp = () => ({
    template: `<div><a  href="/?path=/story/on-changes-test--on-changes">hi</a></div>`
});

export const tempWithComponent = () => ({
    component: MainComponent,
    moduleMetadata: {
        // declarations: [RoutingComponentComponent, ],
        // imports: [RouterModule]
        // providers: [Router],
        // ...TempModule
        imports: [TempModule],
        providers:[
            { provide: APP_BASE_HREF, useValue: '/'}
        ]
    }
})
