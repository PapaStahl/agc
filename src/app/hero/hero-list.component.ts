import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-list',
    templateUrl: './hero-list.component.html'/*,
    providers: [HeroService]*/
})

export class HeroListComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;
    count: number;

    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => {
            this.heroes = heroes;
            this.count = this.heroes.length;
        }
        );
    }

    onSelect(hero: Hero): void {
        if (hero) {
            this.selectedHero = hero;
            console.log('Selected hero: ' + hero.name);
        }
    }

    goToDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}