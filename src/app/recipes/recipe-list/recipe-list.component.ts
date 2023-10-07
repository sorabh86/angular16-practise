import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() onItemSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    new Recipe("First Recipe", "This is my first receipt", "https://th.bing.com/th/id/OIP.6X1F4ij9TbWz17aC8zhAUAHaHa?pid=ImgDet&rs=1"),
    new Recipe("Second Recipe", "This is my second receipt", "https://th.bing.com/th/id/OIP.6X1F4ij9TbWz17aC8zhAUAHaHa?pid=ImgDet&rs=1"),
  ];

  onItemSelectedHandler(recipe:Recipe) {
    this.onItemSelected.emit(recipe);
  }

}
