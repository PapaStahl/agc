import { Component } from '@angular/core';

export class Hero{
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <div class="container">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h2>My Heroes:</h2>      
      </div>
      <div class="panel-body">
        <ul>
        <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
        </ul>
      </div>
    </div>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3>{{hero.name}} Details:</h3>      
      </div>
      <div class="panel-body">
        <div class="input-group"><label>Id: </label> {{hero.id}}</div>
        <div class="input-group"><label for="txtHeroName">Name: </label> 
        <input class="form-control" [(ngModel)]= "hero.name" placeholder="Name" name="txtHeroName" id="txtHeroName"/>
      </div>
    </div>
  </div>`,
})
export class AppComponent  {
   title = 'Tour of Heroes'; 
   selectedHero : Hero;
   heroes = HEROES;

   onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
  }
