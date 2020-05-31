import { Component, OnInit, Input, Output, EventEmitter, Type, ComponentFactoryResolver, ViewContainerRef, OnChanges } from '@angular/core';
import { StoryOutputs } from 'src/model';

@Component({
  selector: 'app-story-wrapper',
  templateUrl: './story-wrapper.component.html',
  styleUrls: ['./story-wrapper.component.scss']
})
export class StoryWrapperComponent implements OnInit, OnChanges {
  constructor(private cfr: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  @Input() component: any;
  @Input() inputs: any;
  @Input() outputs: any;
  @Input() OutputHandler: any;    // 1 universal?? doesn't needed?

  private dynamicComponent: Type<any>
  private dynamicComponentInputs: any;
  private dynamicComponentOutputs: StoryOutputs;
  @Output() event: EventEmitter<any> = new EventEmitter();      // type {eventName: string, data: any} ??

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    // throw new Error("Method not implemented.");
    console.log(changes);
  }

  ngOnInit() {
    this.dynamicComponent = this.component;
    this.dynamicComponentInputs = this.inputs;
    this.dynamicComponentOutputs = this.outputs;

    //dynamically create component inside;
    const componentFactory = this.cfr.resolveComponentFactory(this.dynamicComponent);
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    const outputs = componentRef.instance.outputs.subscribe(event => console.log(event));   // variable doesnt' needed... place outputs here.
    Object.keys(this.dynamicComponentInputs).forEach(input => {
      componentRef.instance[input] = this.dynamicComponentInputs[input];
    });
  }

}
