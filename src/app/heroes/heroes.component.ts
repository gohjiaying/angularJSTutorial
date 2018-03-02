import { Component, OnInit } from '@angular/core';

// import a class
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// export so that can import elsewhere.. like in the AppModule
export class HeroesComponent implements OnInit {
  // import from mock-heroes
  heroes = HEROES;
  // indicate selected hero
  selectedHero: Hero;

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  constructor() { }

  // LifecycLe hook
  ngOnInit() {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
