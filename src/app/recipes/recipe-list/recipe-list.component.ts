import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html"
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is a simple test",
      "https://www.simplyrecipes.com/wp-content/uploads/2007/01/homemade-pizza-horiz-a-1200-600x400.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
