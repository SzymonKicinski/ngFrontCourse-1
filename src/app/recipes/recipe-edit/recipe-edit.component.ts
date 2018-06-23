import { IngredientModule } from './../../shared/model/ingredient/ingredient.module';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          console.log(this.activatedRoute.url);
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          // Display data
          console.log('Czy jest w editMode');
          console.log(this.editMode);
          this.initForm();
        }
      );
  }

  onSubmit() {
    console.log(this.recipeForm.value);
  }


  private initForm() {
    let recipeName = 'Pass the name of recipe';
    let recipeImagePath = 'Pass the url of image';
    let recipeDescription = 'Pass the description of recipe';
    // tslint:disable-next-line:prefer-const
    let recipeIngredients = new FormArray(
      []
    );

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        // tslint:disable-next-line:prefer-const
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(
              ingredient.name,
            ),
            'amount': new FormControl(
              ingredient.amount,
            )
          })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(
        recipeName,
        [Validators.required]
      ),
      'imagePath': new FormControl(
        recipeImagePath,
        [Validators.required]
      ),
      'description': new FormControl(
        recipeDescription,
        [Validators.required]
      ),
      'ingredients': new FormControl(
        recipeIngredients
      )
    });
  }

}
