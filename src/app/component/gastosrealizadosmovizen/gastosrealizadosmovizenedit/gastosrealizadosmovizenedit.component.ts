import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {Ingredient} from "../../../model/ingredient.model";
import {GastosrealizadosmovizenService} from "../gastosrealizadosmovizen.service";


@Component({
  selector: 'app-gastosrealizadosmovizenedit',
  templateUrl: './gastosrealizadosmovizenedit.component.html',
  styleUrls: ['./gastosrealizadosmovizenedit.component.css']
})
export class GastosrealizadosmovizeneditComponent implements OnInit {
  constructor(private gastosRealizadosMovizenService: GastosrealizadosmovizenService) {
  }

  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

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
  }

  getlocalstorage(slForm : NgForm){
  const value = this.slForm;
  let slform = this.slForm.value ({
    Species: value,
    Quantity: value,
    Price: value,
    Total: value,
    }
  );
  let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  localStorage.setItem('items', JSON.stringify(itemsArray));
  console.log(localStorage.getItem('item'));
    console.log(this.slForm)
  }
  /*saveTolocalStorage() {
    let slform = this.slForm
    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    itemsArray.push(slform.value);
    localStorage.setItem('items', {});
    const data = JSON.parse(localStorage.getItem('items'));
    console.log(itemsArray)
  }*/


 /*localstoretime () {
      //here happens the magic. `username` is always restored from the localstorage when you reload the site
      @LocalStorage() this.editedItem.Species = '';

    }
*/

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
