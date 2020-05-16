import { Component, OnInit, Input, Output, EventEmitter, Type, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { StoryOutputs } from 'src/model';

@Component({
  selector: 'app-story-wrapper',
  templateUrl: './story-wrapper.component.html',
  styleUrls: ['./story-wrapper.component.scss']
})
export class StoryWrapperComponent implements OnInit {
  constructor(private cfr: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  @Input() data: any;
  @Input() OutputHandler: any;    // 1 universal??

  private dynamicComponent: Type<any>
  private dynamicComponentInputs: any;
  private dynamicComponentOutputs: StoryOutputs;
  @Output() event: EventEmitter<any> = new EventEmitter();      // type {eventName: string, data: any} ??


  ngOnInit() {
    this.dynamicComponent = this.data.component;
    this.dynamicComponentInputs = this.data.inputs;
    this.dynamicComponentOutputs = this.data.outputs;

    //dynamically create component inside;
    const componentFactory = this.cfr.resolveComponentFactory(this.dynamicComponent);
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    const outputs = componentRef.instance.outputs.subscribe(event => console.log(event));   // variable doesnt' needed
  }

}
