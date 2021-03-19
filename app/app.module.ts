/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ViewMoviesComponent } from './view-movies/view-movies.component';
import { ViewMoviesUserComponent } from './view-movies-user/view-movies-user.component';
import { FavoritesComponent } from './favorites/favorites.component'
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EditMovieComponent,
    ViewMoviesComponent,
    ViewMoviesUserComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }*/



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ViewMoviesComponent } from './view-movies/view-movies.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorBasicAuthService } from './http-interceptor-basic-auth.service';
import { LoginComponent } from './login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ViewMoviesUserComponent } from './view-movies-user/view-movies-user.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ViewMoviesComponent,
    EditMovieComponent,
    LoginComponent,
    FavoritesComponent,
    ViewMoviesUserComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
 
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true}, AuthGuard
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }