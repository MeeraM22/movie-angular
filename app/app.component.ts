/*import { Component } from '@angular/core';
import {MovieService} from './movie.service'
import {movie} from './movie'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-cruiser';
 
  movies:movie[];
  constructor(private movieService:MovieService) {}
 
    ngOnInit(): void {
      this.movieService.getAllMovies().subscribe(res =>{
        this.movies = res;
      })
    }
  
}*/

import { Component } from '@angular/core';
 
import { Movie } from './interface/movie';
import { MovieService } from './movie.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie';
 
  constructor(private movieService : MovieService){
 
    
 
  }
 
  movies : Movie[] = [];
 
  getList(){
 
    this.movieService.getMovies().subscribe(res => {this.movies.push(res)})
 
  }
 
}

