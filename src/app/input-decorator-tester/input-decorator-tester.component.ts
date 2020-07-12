import { Component, OnInit, OnChanges, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-decorator-tester',
  templateUrl: './input-decorator-tester.component.html',
  styleUrls: ['./input-decorator-tester.component.scss']
})
export class InputDecoratorTesterComponent implements OnInit, OnChanges {
  constructor() { }

  public count: number = 0;
  @Input() decoratedInput: any;
  undecoratedInput: any;

  ngOnInit() {
    console.log('here')
  }

  ngOnChanges(changes: SimpleChanges) {
    this.count++;
    console.log(changes)
    console.log('onchanges')

  }

}
