// Klasa obiektow - `ala interface`
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(nameC: string, descriptionC: string, imagePathC: string) {
        this.name = nameC;
        this.description = descriptionC;
        this.imagePath = imagePathC;
    }
}