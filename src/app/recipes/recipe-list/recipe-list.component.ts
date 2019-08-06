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
    ),
    new Recipe(
      "Second Test Recipe",
      "This is also a test",
      "https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/Scrambled-with-Milk-930x620.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
