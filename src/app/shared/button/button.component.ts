import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IOutput, ButtonInput } from 'src/model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  constructor() { }

  @Input() input: ButtonInput;
  @Output() output: EventEmitter<IOutput> = new EventEmitter();
  description: string;
  action: () => void;

  ngOnInit() {
    this.description = this.input.description;

    this.action = this.input.action;

  }

}
