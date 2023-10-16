import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id:number;
  recipe:Recipe;

  constructor(
    private recipeService:RecipeService,
    private route:ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = +params.id;
      this.recipe = this.recipeService.getRecipe(this.id);
    })
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
}
