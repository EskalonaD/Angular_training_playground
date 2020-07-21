import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-main.ts',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor() { }

  title = 'Tour of Heroes';
  heroes: Hero[] = [
    new Hero(1, 'WindStorm'),
    new Hero(13, 'Bombasto'),
    new Hero(51, 'Magneta'),
    new Hero(58, 'Tornado')
  ];
  myHero = this.heroes[0];

  ngOnInit() {
  }

}
