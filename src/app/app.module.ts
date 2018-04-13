import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {routing} from "./router-M";
import {GastosRealizadosM} from "./component/gastosrealizadosmovizen/gastosrealizados-M";
import {GastosrealizadosmovizenService} from "./component/gastosrealizadosmovizen/gastosrealizadosmovizen.service";
import {LocalStorageModule} from "angular-2-local-storage";
import {DataStoregeService} from "./services/datastorage.service";
import {HttpClientModule} from "@angular/common/http";






@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    GastosRealizadosM,
    LocalStorageModule,
    HttpClientModule
  ],
  providers: [
    GastosrealizadosmovizenService,
    DataStoregeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
