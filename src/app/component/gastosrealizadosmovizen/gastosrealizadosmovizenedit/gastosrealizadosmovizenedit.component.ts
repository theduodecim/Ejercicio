import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {Ingredient} from "../../../model/ingredient.model";
import {GastosrealizadosmovizenService} from "../gastosrealizadosmovizen.service";
import {DataStoregeService} from "../../../services/datastorage.service";


@Component({
  selector: 'app-gastosrealizadosmovizenedit',
  templateUrl: './gastosrealizadosmovizenedit.component.html',
  styleUrls: ['./gastosrealizadosmovizenedit.component.css']
})
export class GastosrealizadosmovizeneditComponent implements OnInit {
  constructor(private gastosRealizadosMovizenService: GastosrealizadosmovizenService,
              public dataStorage: DataStoregeService
  ) {
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

  onSaveData() {
    this.dataStorage.storeIngredient()
      .subscribe(
        (res) => {
          console.log(res);
        }
      );
  }


  OnSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.Species, value.Quantity, value.Price, value.Total);
    if (this.editMode) {
      this.gastosRealizadosMovizenService.updateIngredient(this.editedItemIndex, newIngredient);
      this.onSaveData();
    } else {
      this.gastosRealizadosMovizenService.addIngredient(newIngredient);
      this.onSaveData()
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
    this.onSaveData();
    this.editMode = false;
  }


  ngOnDestroy() {
  }
}
