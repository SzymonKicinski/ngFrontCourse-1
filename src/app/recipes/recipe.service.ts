import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { IngredientModule } from '../shared/model/ingredient/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipesArray: Array<Recipe> = [
    {
      name: `Tasty Schnitzel`,
      description: `A super-tasty Schnitzel - just awesome!`,
      imagePath: `https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg`,
      ingredients: [
        { name: 'Bread', amount: 1 },
        { name: 'Chesse', amount: 13 },
        { name: 'Meat', amount: 5 },
        { name: 'Banana', amount: 3 },
      ]
    },
    {
      name: `Big Fat Burger`,
      description: `What else you need to say?`,
      imagePath: `https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg`,
      ingredients: [
        { name: 'French Fires', amount: 11 },
        { name: 'Bolt', amount: 3 },
        { name: 'Sausage', amount: 12 },
        { name: 'Steak', amount: 45 },
        { name: 'Bread', amount: 13 },
      ]
    },
  ];


  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipesArray = recipes;
    this.recipesChanged.next(this.recipesArray.slice());
  }

  getRecipes(): Array<Recipe> {
    // slice zwraca kopie listy
    return this.recipesArray.slice();
  }

  getRecipe(index: number) {
    return this.recipesArray[index];
  }

  addIngredientsToShoppingList(ingredients: IngredientModule[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipesArray.push(recipe);
    this.recipesChanged.next(this.recipesArray.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipesArray[index] = newRecipe;
    this.recipesChanged.next(this.recipesArray.slice());
  }

  deletedRecipe(index: number) {
    this.recipesArray.splice(index, 1);
    this.recipesChanged.next(this.recipesArray.slice());
  }
}
