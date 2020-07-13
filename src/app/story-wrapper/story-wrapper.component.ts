import { Component, OnInit, Input, Output, EventEmitter, Type, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { StoryOutputs } from 'src/model';

@Component({
  selector: 'app-story-wrapper',
  templateUrl: './story-wrapper.component.html',
  styleUrls: ['./story-wrapper.component.scss']
})
export class StoryWrapperComponent implements OnInit {
  constructor(private cfr: ComponentFactoryResolver, /*private viewContainerRef: ViewContainerRef*/) { }

  @Input() props: any;
  @Input() OutputHandler: any;    // 1 universal?? doesn't needed?
  @Input() component: Type<Component>;
  @Input() inputs: {[key: string]: any} = {}; //change
  @Input() outputs: StoryOutputs = {};
  @ViewChild('div', {static: false, read: ViewContainerRef}) div;



  @Output() event: EventEmitter<any> = new EventEmitter();      // type {eventName: string, data: any} ??


  ngOnInit() {

    /**
     * dynamically create component after component through viewContainerRef property;
     */

    // const componentFactory = this.cfr.resolveComponentFactory(this.component);
    // // const componentRef = this.viewContainerRef.createComponent(componentFactory);
    // const componentRef = this.div.createComponent(componentFactory);
    // // const outputs = componentRef.instance.outputs.subscribe(event => console.log(event));   // variable doesnt' needed... place outputs here.
    // Object.keys(this.inputs).forEach(input => {
    //   componentRef.instance[input] = this.inputs[input];
    // });
  }


  ngAfterViewInit() {
    /**
     * component will be created not inside div, but under it
     */
    const componentFactory = this.cfr.resolveComponentFactory(this.component);
    const componentRef = this.div.createComponent(componentFactory);

    componentRef.instance.output.subscribe(({event, payload}) => {
      console.log(event);
      this.outputs[event](payload);
    });   // variable doesnt' needed... place outputs here.

    Object.keys(this.inputs).forEach(input => {
      componentRef.instance[input] = this.inputs[input];
    });

    console.log(componentRef.instance)
  }
}
