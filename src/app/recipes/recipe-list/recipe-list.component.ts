import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe("First Recipe", "This is my first receipt", "https://th.bing.com/th/id/OIP.6X1F4ij9TbWz17aC8zhAUAHaHa?pid=ImgDet&rs=1"),
    new Recipe("First Recipe", "This is my first receipt", "https://th.bing.com/th/id/OIP.6X1F4ij9TbWz17aC8zhAUAHaHa?pid=ImgDet&rs=1"),
  ];

  constructor(){}

  ngOnInit() {

  }
}
