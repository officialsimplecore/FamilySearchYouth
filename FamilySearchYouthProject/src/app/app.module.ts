import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegionalComponent } from './views/regional/regional.component';
import { EntranceMapComponent } from './views/entrance-map/entrance-map.component';
import { CardComponent } from './components/card/card.component';

// Components
import {GoogleMapsModule} from '@angular/google-maps';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './views/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegionalComponent,
    EntranceMapComponent,
    CardComponent,
    AdminComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
