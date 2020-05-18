import { Component, OnInit, Input, Output, EventEmitter, Type, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { StoryOutputs } from 'src/model';

@Component({
  selector: 'app-story-wrapper',
  templateUrl: './story-wrapper.component.html',
  styleUrls: ['./story-wrapper.component.scss']
})
export class StoryWrapperComponent implements OnInit {
  constructor(private cfr: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  @Input() inputs: any;
  @Input() OutputHandler: any;    // 1 universal?? doesn't needed?

  private dynamicComponent: Type<any>
  private dynamicComponentInputs: any;
  private dynamicComponentOutputs: StoryOutputs;
  @Output() event: EventEmitter<any> = new EventEmitter();      // type {eventName: string, data: any} ??


  ngOnInit() {
    this.dynamicComponent = this.inputs.component;
    this.dynamicComponentInputs = this.inputs.inputs;
    this.dynamicComponentOutputs = this.inputs.outputs;

    //dynamically create component inside;
    const componentFactory = this.cfr.resolveComponentFactory(this.dynamicComponent);
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    const outputs = componentRef.instance.outputs.subscribe(event => console.log(event));   // variable doesnt' needed... place outputs here.
    Object.keys(this.dynamicComponentInputs).forEach(input => {
      componentRef.instance[input] = this.dynamicComponentInputs[input];
    });
  }

}
