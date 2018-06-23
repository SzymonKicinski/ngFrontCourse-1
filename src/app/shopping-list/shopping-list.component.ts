import { Component, OnInit, OnDestroy } from '@angular/core';
import { IngredientModule } from '../shared/model/ingredient/ingredient.module';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private subcription: Subscription;

  ingredients: Array<IngredientModule> = [];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredientsArray();
    this.subcription = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: IngredientModule[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
