import {RouterModule, Routes} from "@angular/router";
import {GastosrealizadosmovizenComponent} from "./component/gastosrealizadosmovizen/gastosrealizadosmovizen.component";


const appRoutes: Routes = [
  { path: '', component: GastosrealizadosmovizenComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
