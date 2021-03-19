/*import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class MovieService {
 
  constructor(private http:HttpClient) { }
 
  getAllMovies() : Observable<any> {
    return this.http.get<any>("http://localhost:8080/angular",
{
  headers: new HttpHeaders()
  .set ('Authorization',"Bearer ")
}
).pipe(
  catchError(this.handleError)
);
  }
}*/
  

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './interface/movie';
 
@Injectable({
  providedIn: 'root'
})
export class MovieService {
 
  constructor(private http : HttpClient) { }
 
  getMovies() : Observable<any>{
 
    let basicHeaderString  = this.createBasicAuthenticationHeader();
    let username = "user";
    let password = "password";
    
    let headers = new HttpHeaders(
      {
        Authorization: 'Basic ' + btoa(username + ':' + password)
      }
    );
 
    return this.http.get<any>('http://localhost:8080/admin', {headers});
 
  }
 
  getMovieById(id :number) {
    return this.http.get<Movie>(`http://localhost:8080/admin/${id}`);
  }
 
  updateMovie(id : number, movie : Movie){
    return this.http.put(`http://localhost:8080/edit-movie/${id}`, movie)
  }
 
  createBasicAuthenticationHeader(){
 
     let username = "user";
     let password = "password";
    let basicAuthenticationHeader = 'Basic ' + btoa(username + ':' + password);
 
  }
 
  
 
  // getMovieById(id : number) : Movie{
 
  //   console.log("SErvice")
 
  //   let movies : Movie[] = [];
 
  //   this.getMovies().subscribe(res => {movies = res});
 
  //   let movie : Movie = movies[1];
 
  
  //   movies.forEach(x => {console.log(x)});
 
  //   for(let i = 0; i < movies.length; i++){
 
       
 
  //     if(i == id){
 
  //       movie = movies[i];
  //       console.log(movie);
 
  //     }
 
  //   }
 
  //   return movie;
 
  // }
 
}