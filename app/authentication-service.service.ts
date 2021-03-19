/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor() { }
}*/


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
 
  constructor(private http : HttpClient) { }
 
  log : boolean = false;
 
  loggedIn() : boolean{
 
    return this.log;
      
  }
 
  logOut(){
 
    this.log = false;
    sessionStorage.removeItem('authenticatedUser');
 
  }
 
  login(username : String, password : String){
 
    let basicAuthenticationHeader = 'Basic ' + btoa(username + ':' + password);
    // let authenticatedUser : String = 'authenticatedUser';
    let headers = new HttpHeaders({
 
      Authorization: basicAuthenticationHeader
 
    })
 
    
 
   return this.http.get("http://localhost:8080/login", {headers, responseType: 'text' as 'json'})
   .pipe(
 
    map(data => {sessionStorage.setItem('authenticatedUser', <string>username); 
      this.log = true;
    return data}
    
    )
 
    );
 
  }
 
}
