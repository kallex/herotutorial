import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/toPromise"

@Injectable()
export class HeroService {
  private headers = new Headers({ "Content-Type": "application/json"});

  private heroesurl = "api/heroes";

  constructor(private http: Http) {

  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesurl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  private handleError(error:any) : Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number) : Promise<Hero> {
    const url = `${this.heroesurl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero) : Promise<Hero> {
    const url = `${this.heroesurl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
}
