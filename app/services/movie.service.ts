import { HttpClient, HttpHeaders } from '@angular/common/http';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interface/movie';
 
@Injectable({
  providedIn: 'root'
})
export class MovieService {
 
  constructor(private http : HttpClient) { }
 
  getMovies() : Observable<any>{
 
    // let basicHeaderString  = this.createBasicAuthenticationHeader();
    // let username = "meera";
    // let password = "password";
    
    // let headers = new HttpHeaders(
    //   {
    //     Authorization: 'Basic ' + btoa(username + ':' + password)
    //   }
    // );
 
    return this.http.get<any>('http://localhost:8080/admin');
 
  }
 
  getMovieById(id :number) {
    return this.http.get<Movie>(`http://localhost:8080/admin/${id}`);
  }
 
  updateMovie(id : number, movie : Movie){
    return this.http.put(`http://localhost:8080/edit-movie/${id}`, movie)
  }
 
  getMovieListCustomer(){
 
    return this.http.get<any>('http://localhost:8080/customer')
 
  }
 
  createBasicAuthenticationHeader(){
 
     let username = "user";
     let password = "password";
    let basicAuthenticationHeader = 'Basic ' + btoa(username + ':' + password);
 
  }
 
}