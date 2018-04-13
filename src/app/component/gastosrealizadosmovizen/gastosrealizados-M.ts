import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {GastosrealizadosmovizenComponent} from "./gastosrealizadosmovizen.component";
import {GastosrealizadosmovizeneditComponent} from "./gastosrealizadosmovizenedit/gastosrealizadosmovizenedit.component";

@NgModule({
  declarations: [
    GastosrealizadosmovizenComponent,
    GastosrealizadosmovizeneditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
  ]
})

export class GastosRealizadosM {}
