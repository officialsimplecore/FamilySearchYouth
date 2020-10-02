import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegionalComponent} from './views/regional/regional.component';
import {EntranceMapComponent} from './views/entrance-map/entrance-map.component';
import {AdminComponent} from './views/admin/admin.component';


const routes: Routes = [
  {
    path: '',
    component: EntranceMapComponent
  },
  {
    path: 'youth',
    component: RegionalComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
