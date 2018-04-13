import {Subject} from 'rxjs/Subject';
import {Ingredient} from "../../model/ingredient.model";
import {Injectable} from "@angular/core";

@Injectable()
export class GastosrealizadosmovizenService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient('Manzanas', 2 , 50 , 100),
    new Ingredient('Bananas', 4, 25 , 100)
  ];
  constructor() {}

  getIncredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
    localStorage.userName = "rdegges";
    localStorage.setItem("ingredient", "ingredient");
    alert(localStorage.userName + " really likes the color " + localStorage.ingredient);
    localStorage.getItem("ingredient")
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
