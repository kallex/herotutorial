import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from "./hero-detail.component";
import {AppComponent} from "./app.component";
import {HeroService} from "./hero.service";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: "heroes",
        component: HeroesComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
      }
    ])

  ],
  providers: [ HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }


