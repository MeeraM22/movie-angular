import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, FormControl, Validators, } from '@angular/forms'
 
import { map } from 'rxjs/operators';
 
import { Movie } from '../interface/movie';
import { MovieService } from '../movie.service';
import { AuthenticationServiceService } from '../authentication-service.service';


 
@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
 
  constructor(private movieService : MovieService, private route : ActivatedRoute, private router : Router, private login : AuthenticationServiceService) { }
 
  movieId : number = parseInt(this.route.snapshot.paramMap.get('id')!);
 
  movie : Movie ={
 
    title : "",
    isActive : "",
    boxOffice : 0,
    genre : "",
    date_of_launch : new Date("2018/12/12"),
    id : 0,
    hasTeaser : ""
 
  };
 
  // movies : Movie[] = [];
   result! : Movie ;
   //name : String = this.result.title;
  
  // handleResponse(response: Movie){
  //   this.movies.push(response);
  // }
 
  // handler(){
  //   console.log(this.movies[0]);
  // }
 
  ngOnInit(): void {
 
    //this.movieService.getMovies().subscribe(res => {this.handleResponse(res)});
    this.movieService.getMovieById(this.movieId).subscribe(res => {this.result = res});
   
  }
 
  editHandler(){
    this.movieService.updateMovie(this.movieId, this.result)
    .subscribe(res => 
              {console.log(res);
                this.router.navigate(['view-movies']);
              });
  }
  
 
  username = sessionStorage.getItem('authenticatedUser');
 
  logOut(){
 
    this.login.logOut();
 
  }
 
}