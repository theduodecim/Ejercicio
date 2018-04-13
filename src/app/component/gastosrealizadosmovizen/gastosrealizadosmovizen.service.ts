
import {Subject} from 'rxjs/Subject';
import {Ingredient} from "../../model/ingredient.model";
export class GastosrealizadosmovizenService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5 ,5 ,5 ),
    new Ingredient('Tomatos', 10,5 ,5)
  ];
  constructor() {}

  getIncredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredinet: Ingredient) {
    this.ingredients.push(ingredinet);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredinets: Ingredient[]) {
  }

  IngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
