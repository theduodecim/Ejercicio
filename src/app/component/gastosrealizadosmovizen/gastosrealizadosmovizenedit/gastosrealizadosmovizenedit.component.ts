import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {Ingredient} from "../../../model/ingredient.model";
import {GastosrealizadosmovizenService} from "../gastosrealizadosmovizen.service";
import {InputDecorator} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-gastosrealizadosmovizenedit',
  templateUrl: './gastosrealizadosmovizenedit.component.html',
  styleUrls: ['./gastosrealizadosmovizenedit.component.css']
})
export class GastosrealizadosmovizeneditComponent implements OnInit {
  constructor(private gastosRealizadosMovizenService: GastosrealizadosmovizenService) {
  }

  @ViewChild('f') slForm: NgForm;
  @ViewChild('s') spiceinput: InputDecorator;
  @ViewChild('q') quantityinput;
  @ViewChild('p') priceinput;
  @ViewChild('t') totalinput;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  ngOnInit() {
    this.gastosRealizadosMovizenService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.gastosRealizadosMovizenService.getIngredient(index);
          this.slForm.setValue({
            Species: this.editedItem.Species,
            Quantity: this.editedItem.Quantity,
            Price: this.editedItem.Price,
            Total: this.editedItem.Total,
          });
        }
      );

    const data = JSON.parse(localStorage.getItem('items'));
  }
  /*saveTolocalStorage() {
    localStorage.setItem('items', JSON.stringify(this.spiceinput));
    localStorage.setItem('items', JSON.stringify(this.quantityinput));
    localStorage.setItem('items', JSON.stringify(this.priceinput));
    localStorage.setItem('items', JSON.stringify(this.totalinput));
    const data = JSON.parse(localStorage.getItem('items'));
    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

  }*/


  OnSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.Species, value.Quantity, value.Price, value.Total);
    if (this.editMode) {
      this.gastosRealizadosMovizenService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {

      this.gastosRealizadosMovizenService.addIngredient(newIngredient);
    }
    this.editMode = false;

    form.onReset();
  }



  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.gastosRealizadosMovizenService.deleteIngredient(this.editedItemIndex);
    this.onClear();
    this.editMode = false;
  }

  ngOnDestroy() {
  }
}
