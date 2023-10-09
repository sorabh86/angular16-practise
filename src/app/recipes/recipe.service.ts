import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes:Recipe[] = [
        new Recipe("First Recipe", "This is my first receipt", "https://th.bing.com/th/id/OIP.6X1F4ij9TbWz17aC8zhAUAHaHa?pid=ImgDet&rs=1"),
        new Recipe("Second Recipe", "This is my second receipt", "https://th.bing.com/th/id/OIP.6X1F4ij9TbWz17aC8zhAUAHaHa?pid=ImgDet&rs=1"),
    ];
    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice(); // slice only gives the exact copy not acctual reference
    }
}