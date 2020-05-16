import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-story-wrapper',
  templateUrl: './story-wrapper.component.html',
  styleUrls: ['./story-wrapper.component.scss']
})
export class StoryWrapperComponent implements OnInit {
  constructor() { }

  @Input() data: any;
  @Input() OutputHandler: any;    // 1 universal??

  @Output() event: EventEmitter<any> = new EventEmitter();      // type {eventName: string, data: any} ??


  ngOnInit() {
  }

}
