import { Injectable } from '@angular/core';
import { IngredientModule } from '../shared/model/ingredient/ingredient.module';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<Array<IngredientModule>>();
  startedEditing = new Subject<number>();
  private ingredientsArray = [
    {
      name: 'Apples',
      amount: 5
    },
    {
      name: 'Tomatoes',
      amount: 4
    }
  ];

  constructor() { }

  getIngredientsArray(): Array<IngredientModule> {
    return this.ingredientsArray.slice();
  }

  getIngredient(index: number) {
    return this.ingredientsArray[index];
  }

  addIngredient(ingredient: IngredientModule) {
    this.ingredientsArray.push(ingredient);
    this.ingredientsChanged.next(this.ingredientsArray.slice());
  }

  addIngredients(ingredients: IngredientModule[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredientsArray.push(...ingredients);
    this.ingredientsChanged.next(this.ingredientsArray.slice());
  }

  updateIngredient(index: number, newIngredient: IngredientModule) {
    this.ingredientsArray[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredientsArray.slice());
  }
}
