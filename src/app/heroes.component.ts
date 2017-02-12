import {Component, OnInit, Input, trigger, state, style, transition, animate} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";

import * as _ from "lodash";

@Component({
  selector: 'my-heroes',
  //templateUrl: './app.component.html',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  animations: [
    trigger("heroState", [
      state("inactive", style([{
        backgroundColor: "#eee",
        transform: "scale(1)"
      }
      ])),
      state("active", style([{
        backgroundColor: "#cfd8dc",
        transform: "scale(1.1)"
      }])),
      transition("inactive => active", animate("100ms ease-in")),
      transition("active => inactive", animate("100ms ease-out"))
    ])
  ]
})
export class HeroesComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService:HeroService, private router:Router) {

  }

  gotoDetail() : void {
    this.router.navigate(["/detail", this.selectedHero.id]);
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) {
      return;
    }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero) : void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if(this.selectedHero === hero) {
          this.selectedHero = null;
        }
      });
  }

  toggleState(hero: Hero) : void  {
    if(hero.state === "active")
      hero.state = "inactive";
    else
      hero.state = "active";
  }

  setState(hero: Hero, state: string) : void {
    hero.state = state;
  }


  selectedHero: Hero;
  heroes : Hero[];
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    _.forEach(this.heroes, item => this.setState(item, "inactive"));
    this.setState(hero, "active");
  }
}
