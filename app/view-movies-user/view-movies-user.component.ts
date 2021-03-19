import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Movie } from '../interface/movie';
import { FavoritesService } from '../services/favorites.service';
import { MovieService } from '../services/movie.service';
 
@Component({
  selector: 'app-view-movies-user',
  templateUrl: './view-movies-user.component.html',
  styleUrls: ['./view-movies-user.component.css']
})
export class ViewMoviesUserComponent implements OnInit {
 
  constructor(private movieService : MovieService, private favoriteService : FavoritesService
              , private login : AuthenticationServiceService
    ) { }
 
  movies : Movie[] = [];
 
  ngOnInit(): void {
 
      this.movieService.getMovieListCustomer().subscribe(res => {this.movies = res})
 
  }
 
  username = sessionStorage.getItem('authenticatedUser');
 
  addToFavorites(id : Number){
 
    console.log(id);
 
    let movieId = '';
    movieId += id;
 
    this.favoriteService.addToFavorites(movieId, this.username!).subscribe(
 
      data => {console.log(data)}
 
    );
 
  }
 
  logOut(){
 
    this.login.logOut();
 
  }
 
}