import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  title: string = 'New Recipe';
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];

      if (this.id || this.id === 0) {
        this.title = 'Edit Recipe';
        this.recipe = this.recipeService.getRecipe(this.id);
      } else {
        this.title = 'New Recipe';
      }
    });
  }
}
