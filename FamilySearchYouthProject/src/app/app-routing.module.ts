import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegionalComponent} from './views/regional/regional.component';
import {EntranceMapComponent} from './views/entrance-map/entrance-map.component';


const routes: Routes = [
  {
    path: '',
    component: EntranceMapComponent
  },
  {
    path: 'youth',
    component: RegionalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
