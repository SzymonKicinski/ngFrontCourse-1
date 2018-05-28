import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipesArray: Array<Recipe> = [
    {
      name: `one`, description: `desc`,
      imagePath: `https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg`
    },
    {
      name: `two`, description: `desc2`,
      imagePath: `https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg`
    },
  ];
  recipes: Recipe[] = [];
  constructor() { }

  ngOnInit() {
  }

}
