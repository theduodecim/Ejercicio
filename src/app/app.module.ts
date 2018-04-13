import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {routing} from "./router-M";
import {GastosRealizadosM} from "./component/gastosrealizadosmovizen/gastosrealizados-M";
import {GastosrealizadosmovizenService} from "./component/gastosrealizadosmovizen/gastosrealizadosmovizen.service";






@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    GastosRealizadosM,
  ],
  providers: [
    GastosrealizadosmovizenService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
