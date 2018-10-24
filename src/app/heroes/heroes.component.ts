import { Component, OnInit } from '@angular/core';
import { hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

hero: hero = {
  id: 1,
  name: 'Windstrom'
}

heroes = HEROES;

selectedHero: hero;
onSelect(hero: hero): void {
  this.selectedHero = hero;
}

  constructor() { }

  ngOnInit() {
  }

}
