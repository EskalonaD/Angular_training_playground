import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {
  constructor() { }

  googleUrl: string = 'https://www.google.com';
  title: string = 'interpolation class';

  getVal() {
    return 2;
  }


  ngOnInit() {
  }

}
