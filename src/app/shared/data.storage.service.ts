import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { RecipeService } from './../recipes/recipe.service';
import { HttpModule, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

    httpURL = 'https://ng-recipe-book-6eaef.firebaseio.com';

    // Token Params
    auth: String = 'auth';
    token: String;

    constructor(
        private http: Http,
        private recipeService: RecipeService,
        private authService: AuthService
    ) { }

    storeRecipes() {
        const token = this.authService.getToken();
        const params = `?${this.auth}=${token}`;
        return this.http.put(`${this.httpURL}/recipes.json${params}`,
            this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        const params = `?${this.auth}=${token}`;
        console.log(params);
        this.http.get(`${this.httpURL}/recipes.json${params}`)
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
