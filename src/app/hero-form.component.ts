import {Component} from "@angular/core";
import {Hero} from "./hero";

@Component({
  moduleId: module.id,
  selector: "hero-form",
  templateUrl: "./hero-form.component.html"
})
export class HeroFormComponent {
  powers = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];
  model:Hero = new Hero(0, "Placeholder name", this.powers[0], "Template Alter");
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
