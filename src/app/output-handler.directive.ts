import { Directive, Renderer2, ViewContainerRef, OnInit, Input } from '@angular/core';
import { StoryOutputs } from 'src/model';


//add proper story or remove
@Directive({
  selector: '[outputHandler]'
})
export class OutputHandlerDirective implements OnInit {
  constructor(private renderer: Renderer2, private viewRef: ViewContainerRef) { }

  @Input() outputs: StoryOutputs;


  ngOnInit() {
    console.log('element', this.viewRef.element);
    console.log('ref', this.viewRef)

    Object.entries(this.outputs).forEach(([event, handler]) => this.renderer.listen(this.viewRef.element, event, handler));
  }


}
