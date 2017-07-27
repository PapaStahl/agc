import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from './hero';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {
    private heroesUrl = 'http://heroapicore.azurewebsites.net/api/heroes';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        console.log('getting heroes from api...');
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => {
                console.log('converting response.json() to Hero[]:');
                return response.json() as Hero[];
            })
            .catch(this.handleError);
    }

    getHero(heroId: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${heroId}`;
        console.log('Get hero with heroId ' + heroId);
        return this.http.get(url)
            .toPromise()
            .then(response => {
                console.log(response.json());
                return response.json() as Hero;
            })
            .catch(this.handleError);
    }

    updateHero(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.heroId}`;
        console.log('Updating hero: ' + JSON.stringify(hero));
        return this.http.put(url, JSON.stringify(hero),
            { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    createHero(name: string): Promise<Hero>{
        console.log(`Creating ${name} hero.`);
        return this.http.post(this.heroesUrl,
            JSON.stringify({name: name}),
            {headers: this.headers})
            .toPromise()
            .then(res => res.json().value as Hero)
            .catch(this.handleError);
    }

    deleteHero(id: number): Promise<void>{
        console.log(`Deleting Hero with heroId ${id}.`);
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(()=>null)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in the hero service.', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
