import { Component, OnInit, Input, OnChanges, Output, EventEmitter, SimpleChange, SimpleChanges, DoCheck } from '@angular/core';
import { StorybookComponent, IOutput } from 'src/model';

@Component({
  selector: 'app-changes-test',
  templateUrl: './changes-test.component.html',
  styleUrls: ['./changes-test.component.scss']
})
export class ChangesTestComponent implements OnInit, OnChanges, DoCheck, StorybookComponent {

  @Input() data1;
  @Input() data2;

  @Output() output: EventEmitter<IOutput> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(1);
  }

  ngDoCheck() {
    console.log(2);
  }

  onClick() {
    this.output.emit({ event: 'click', payload: 1 });
  }

  // onBlur() {
  //   this.output.emit({ event: 'blur', payload: 2 });
  // }
}
