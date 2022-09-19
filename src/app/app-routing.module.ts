import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import { PeliDetailComponent } from './peliculas/peli-detail/peli-detail.component';
import { PeliListComponent } from './peliculas/peli-list/peli-list.component';
import { SerieDetailComponent } from './series/serie-detail/serie-detail.component';
import { SerieListComponent } from './series/serie-list/serie-list.component';

const routes: Routes = [
  {path:'peliculas', component: PeliListComponent},
  {path:'series', component: SerieListComponent},
  {path:'peliculas/:id', component: PeliDetailComponent },
  {path:'series/:id', component: SerieDetailComponent },
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
