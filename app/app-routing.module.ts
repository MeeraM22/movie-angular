/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
const routes: Routes = [];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';
import { ViewMoviesUserComponent } from './view-movies-user/view-movies-user.component';
import { ViewMoviesComponent } from './view-movies/view-movies.component';
 
const routes: Routes = [
 
  {path: 'view-movies', component: ViewMoviesComponent, canActivate: [AuthGuard]},
  {path: 'edit-movie/:id', component: EditMovieComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent,},
  {path : 'favorites', component: FavoritesComponent, canActivate: [AuthGuard]},
  {path: 'customer', component: ViewMoviesUserComponent, canActivate: [AuthGuard]}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

