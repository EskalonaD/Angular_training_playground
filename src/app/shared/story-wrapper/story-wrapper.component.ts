import { Component, OnInit, Input, Output, EventEmitter, Type, ComponentFactoryResolver, ViewContainerRef, ViewChild, SimpleChange, SimpleChanges, OnChanges, DoCheck, ComponentRef } from '@angular/core';
import { StoryOutputs } from 'src/model';

@Component({
  selector: 'app-story-wrapper',
  templateUrl: './story-wrapper.component.html',
  styleUrls: ['./story-wrapper.component.scss']
})
export class StoryWrapperComponent implements OnInit, OnChanges, DoCheck {
  constructor(private cfr: ComponentFactoryResolver, /*private viewContainerRef: ViewContainerRef*/) { }

  @Input() props: any;
  @Input() OutputHandler: any;    // 1 universal?? doesn't needed?
  @Input() component: Type<Component>;
  @Input() inputs: any; //change
  // @Input('dynamicComponentOutputs') outputs: StoryOutputs = {};
  @Input() outputs: StoryOutputs = {};
  @ViewChild('div', {static: false, read: ViewContainerRef}) div;
  dynamicComponentInputs: {[key: string]: any} = {}; //change
  private componentRef: ComponentRef<any>;



  @Output() event: EventEmitter<any> = new EventEmitter();      // type {eventName: string, data: any} ??


  ngDoCheck() {
    console.log('do check');

    if(this.componentRef) {
      Object.keys(this.dynamicComponentInputs).forEach(input => {
        this.componentRef.instance[input] = this.dynamicComponentInputs[input];
      });
    }
  }
  ngOnInit() {

    this.dynamicComponentInputs = this.inputs //change;
    console.log(this.outputs)

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

  ngOnChanges(/*changes: SimpleChanges*/) {
    // if(changes.inputs && this.componentRef) {
    //   Object.keys(changes.inputs.currentValue).forEach(input => {
    //     this.componentRef.instance[input] = changes.inputs.currentValue[input];
    //   })
    // }
    console.log('changes',this.dynamicComponentInputs)

    this.dynamicComponentInputs = this.inputs //change;


  }


  ngAfterViewInit() {
    /**
     * component will be created not inside div, but under it
     */
    const componentFactory = this.cfr.resolveComponentFactory(this.component);
    this.componentRef = this.div.createComponent(componentFactory);

// console.log('ref', this.componentRef)
    this.componentRef.instance.output.subscribe(({event, payload}) => {
      // console.log('event', event);
      // console.log(this.outputs[event])
      // console.log(this.outputs)
      this.outputs[event](payload);
    });   // variable doesnt' needed... place outputs here.

    Object.keys(this.dynamicComponentInputs).forEach(input => {
      this.componentRef.instance[input] = this.dynamicComponentInputs[input];
    });

    console.log(this.componentRef.instance)
  }
}
