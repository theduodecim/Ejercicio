import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../model/ingredient.model";
import {Subscription} from "rxjs/Subscription";
import {GastosrealizadosmovizenService} from "./gastosrealizadosmovizen.service";
@Component({
  selector: 'app-gastosrealizadosmovizen',
  templateUrl: './gastosrealizadosmovizen.component.html',
  styleUrls: ['./gastosrealizadosmovizen.component.css']
})
export class GastosrealizadosmovizenComponent implements OnInit {



  ingredients: Ingredient[];
  private subscribe: Subscription;

  constructor(private gastosRealizadosMovizenService: GastosrealizadosmovizenService) {}

  ngOnInit() {
    this.ingredients = this.gastosRealizadosMovizenService.getIncredients();
    this.subscribe = this.gastosRealizadosMovizenService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );

  }

  onEditItem(index: number) {
    this.gastosRealizadosMovizenService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
