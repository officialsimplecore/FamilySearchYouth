import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegionalComponent} from './views/regional/regional.component';
import {EntranceMapComponent} from './views/entrance-map/entrance-map.component';
import {AdminComponent} from './views/admin/admin.component';


const routes: Routes = [
  {
    path: 'youth',
    component: EntranceMapComponent
  },
  {
    path: 'youth/learn',
    component: RegionalComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '**',
    component: EntranceMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
