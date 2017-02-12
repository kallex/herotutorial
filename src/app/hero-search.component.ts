import {Component, OnInit} from "@angular/core";
import {HeroSearchService} from "./hero-search.service";
import {Observable, Subject} from "rxjs";
import {Hero} from "./hero";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "hero-search",
  templateUrl: "./hero-search.component.html",
  styleUrls: [ "./heroes.component.css"],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService : HeroSearchService,
    private router: Router) {
  }

  search(term: string) : void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  gotoDetail(hero: Hero) : void {
    let link = ["/detail", hero.id];
    this.router.navigate(link);
  }

}
