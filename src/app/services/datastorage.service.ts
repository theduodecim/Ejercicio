import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Ingredient} from "../model/ingredient.model";
import {GastosrealizadosmovizenService} from "../component/gastosrealizadosmovizen/gastosrealizadosmovizen.service";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class DataStoregeService {

  constructor(private Http: HttpClient, public gastosRealizadosService: GastosrealizadosmovizenService) {
  }

  storeIngredient() {
    return this.Http.put('https://ejerciciomovizen.firebaseio.com/.json', this.gastosRealizadosService.getIncredients());
  }

 getIngredients() {
    this.Http.get('https://ejerciciomovizen.firebaseio.com/.json')
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.gastosRealizadosService.SetIngredients(ingredients);
        }
      );
  }


}
