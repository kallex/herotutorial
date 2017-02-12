import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from "angular-in-memory-web-api";

import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from "./hero-detail.component";
import {AppComponent} from "./app.component";
import {HeroService} from "./hero.service";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {InMemoryDataService} from "./in-memory-data.service";
import {HeroSearchComponent} from "./hero-search.component";
import {HeroFormComponent} from "./hero-form.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroFormComponent
  ],
  providers: [ HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }


