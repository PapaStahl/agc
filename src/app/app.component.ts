import { Component, OnInit } from '@angular/core';
import { Hero } from './hero/hero';
import { HeroService } from './hero/hero.service';




@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>     
  <hero-list [heroes]="heroes"></hero-list>  
  `,
  providers: [ HeroService ]
})
export class AppComponent implements OnInit  {
   ngOnInit(): void{
     this.getHeroes();
   }
   title = 'Tour of Heroes';    
   heroes: Hero[];
   count: number ;   

   constructor( private heroService: HeroService){}

   getHeroes():void{
     this.heroService.getHeroes().then(heroes => this.heroes = heroes);
     this.count = this.heroes.length;
   }
  }
