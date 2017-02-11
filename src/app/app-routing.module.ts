

import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HeroDetailComponent} from "./hero-detail.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroesComponent} from "./heroes.component";

const routes: Routes = [
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
  },
  {
    path: "detail/:id",
    component: HeroDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
