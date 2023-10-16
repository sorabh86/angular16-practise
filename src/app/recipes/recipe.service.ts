import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    
    recipeSelected = new EventEmitter<Recipe>();

    private recipes:Recipe[] = [
        new Recipe(
            "First Recipe", 
            "This is my first receipt", 
            "/assets/OIP.jpg",
            [
                new Ingredient( 'Meat', 1 ), 
                new Ingredient( 'French Fries', 4 )
            ]
        ), new Recipe(
            "Second Recipe", 
            "This is my second receipt", 
            "/assets/OIP.jpg",
            [
                new Ingredient( 'Buns', 2 ), 
                new Ingredient( 'Meat', 1 )
            ]
        ),
    ];

    constructor(private shoppingListService:ShoppingListService){}

    getRecipes() {
        return this.recipes.slice(); // slice only gives the exact copy not acctual reference
    }

    addIngredientToShoppingList(ingredients:Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(id:number):Recipe {
        return this.recipes[id];
    }
}