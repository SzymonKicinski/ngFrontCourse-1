import { IngredientModule } from "../shared/model/ingredient/ingredient.module";

// Klasa obiektow - `ala interface`
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: IngredientModule[];

    constructor(nameC: string, descriptionC: string, imagePathC: string, ingredients: IngredientModule[]) {
        this.name = nameC;
        this.description = descriptionC;
        this.imagePath = imagePathC;
        this.ingredients = ingredients;
    }
}