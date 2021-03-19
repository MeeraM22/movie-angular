import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Movie } from '../interface/movie';
import { MovieService } from '../services/movie.service';
 
@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.css']
})
export class ViewMoviesComponent implements OnInit {
 
  constructor(private movieService : MovieService, private login : AuthenticationServiceService) { }
 
  movies : Movie[] = [];
 
  ngOnInit(): void {
 
      this.movieService.getMovies().subscribe(res => {this.movies = res})
 
  }
 
  username = sessionStorage.getItem('authenticatedUser');
 
  logOut(){
 
    this.login.logOut();
 
  }
 
}