import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise"

@Injectable()
export class HeroService {
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
}
