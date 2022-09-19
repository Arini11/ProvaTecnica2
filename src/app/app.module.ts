import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { PeliDetailComponent } from './peliculas/peli-detail/peli-detail.component';
import { PeliListComponent } from './peliculas/peli-list/peli-list.component';
import { PeliComponent } from './peliculas/peli/peli.component';
import { SerieDetailComponent } from './series/serie-detail/serie-detail.component';
import { SerieListComponent } from './series/serie-list/serie-list.component';
import { SerieComponent } from './series/serie/serie.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    PeliComponent,
    PeliDetailComponent,
    PeliListComponent,
    SerieComponent,
    SerieDetailComponent,
    SerieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
