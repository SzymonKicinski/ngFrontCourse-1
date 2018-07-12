import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
  // providers: [RecipeService] - prze to przechodząc do innego komponentu - np.
  // Shopping list to tracimy nasze instancje z tego komponentu

})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
