import { Component, OnInit, Input, OnChanges, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-changes-test',
  templateUrl: './changes-test.component.html',
  styleUrls: ['./changes-test.component.scss']
})
export class ChangesTestComponent implements OnInit, OnChanges {

  @Input() data1;
  @Input() data2;

  @Output() ouptut: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  onClick() {
    this.ouptut.emit({ event: 'click', data: 1 });
  }

  onBlur() {
    this.ouptut.emit({ event: 'blur', data: 2 });
  }
}
