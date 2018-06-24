import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;



  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    // Pobiera sam id z url - patrz: kliknij na jakis recipe i w url masz już id
    // Więc on już posiada id - ten komponent - linia 29 ngOnInit
    // Więc przekazujemy mu przez activetedRoute co ma dokleić do aktulanego
    // url.
    // Alternatywa patrz linia niżej -
    // Wracamy się w url piętro w dol. Przekazujemy my id - ktore mamy z ngOnInit
    // recznie. i teraz co ma dokleić do tego oraz gdzie ma się przekierować
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.activatedRoute });
  }

  onDeleteRecipe() {
    this.recipeService.deletedRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
