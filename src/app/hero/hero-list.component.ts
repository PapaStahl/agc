import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-list',
    templateUrl: './hero-list.component.html'
})

export class HeroListComponent{
    @Input() heroes: Hero[];
    selectedHero : Hero;

    onSelect(hero: Hero): void {
     if ( hero ){
      this.selectedHero = hero;
      console.log('Selected hero: ' + hero.name);
     }
    }
}