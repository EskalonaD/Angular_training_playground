import { Component, OnInit, OnChanges, Input, SimpleChange, SimpleChanges, Output, EventEmitter, DoCheck } from '@angular/core';
import { StorybookComponent, ButtonInput, IOutput } from 'src/model';

@Component({
  selector: 'app-input-decorator-tester',
  templateUrl: './input-decorator-tester.component.html',
  styleUrls: ['./input-decorator-tester.component.scss']
})
export class InputDecoratorTesterComponent implements OnInit, OnChanges, DoCheck{//, StorybookComponent {
  constructor() { }

  public onChangesCount: number = 0;
  public doCheckCount: number = 0;
  @Input() decoratedInput: any;
  undecoratedInput: any;
  @Output() output: EventEmitter<IOutput> = new EventEmitter();
  buttonsInput: ButtonInput[] = [
    {description: 'Change decorated Input', action: function() {this.output.emit({event: 'decoratedInputChange', payload: null})}},//() => console.log(this.output)},
    {description: 'Change undecorated Input', action: function() {this.output.emit({event: 'undecoratedInputChange', payload: null})}},//() => console.log(this.output)},
    {description: 'Change decorated Input via ViewChild property', action: function() {this.output.emit({event: 'decoratedInputChangeViaViewChild', payload: null})}},//() => console.log(this.output)},
    // {description: 'smth1', action: () => console.log(2)},

  ]

  ngOnInit() {
    console.log('here')
  }

  ngOnChanges(changes: SimpleChanges) {
    this.onChangesCount++;
    console.log(changes)
    console.log('onchanges')

  }

  ngDoCheck() {
    this.doCheckCount++;
  }

  handleOutput(data: IOutput) {
    this.output.emit(data);
    console.log('output',data);
  }

}
