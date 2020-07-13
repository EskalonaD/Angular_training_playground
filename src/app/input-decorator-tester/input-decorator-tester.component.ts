import { Component, OnInit, OnChanges, Input, SimpleChange, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { StorybookComponent } from 'src/model';

@Component({
  selector: 'app-input-decorator-tester',
  templateUrl: './input-decorator-tester.component.html',
  styleUrls: ['./input-decorator-tester.component.scss']
})
export class InputDecoratorTesterComponent implements OnInit, OnChanges, StorybookComponent {
  constructor() { }

  public count: number = 0;
  @Input() decoratedInput: any;
  undecoratedInput: any;
  @Output() output: EventEmitter<{event: string; payload: any}> = new EventEmitter()

  ngOnInit() {
    console.log('here')
  }

  ngOnChanges(changes: SimpleChanges) {
    this.count++;
    console.log(changes)
    console.log('onchanges')

  }

}
