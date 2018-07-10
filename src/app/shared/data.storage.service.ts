import { Injectable } from '@angular/core';
import { RecipeService } from './../recipes/recipe.service';
import { HttpModule, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

    httpURL = 'https://ng-recipe-book-6eaef.firebaseio.com';

    constructor(
        private http: Http,
        private recipeService: RecipeService
    ) { }

    storeRecipes() {
        return this.http.put(`${this.httpURL}/recipes.json`,
            this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get(`${this.httpURL}/recipes.json`)
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (const recipe of recipes) {
                        if (!recipe['ingredients']) {
                            console.log(recipe);
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}
