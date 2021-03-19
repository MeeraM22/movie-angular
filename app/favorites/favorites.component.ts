import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Movie } from '../interface/movie';
import { FavoritesService } from '../services/favorites.service';
 
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
 
  constructor(private favoriteService : FavoritesService, private router : Router, private login : AuthenticationServiceService) { }
 
  favoriteList : Movie[] = [];
 
  ngOnInit(): void {
 
    this.favoriteService.getFavoritesByUsername(sessionStorage.getItem('authenticatedUser')!).subscribe(
      data => {console.log(data); this.favoriteList = data}
    );
 
  }
 
  refreshPage(){
 
    this.favoriteService.getFavoritesByUsername(sessionStorage.getItem('authenticatedUser')!).subscribe(
      data => {console.log(data); this.favoriteList = data}
    );
 
  }
 
  deleteFavorites(id : Number){
 
    console.log(id);
    this.favoriteService.deleteFromFavorites(id, sessionStorage.getItem('authenticatedUser')!).subscribe(
 
      data => {console.log(data); this.refreshPage()}
 
    );
 
  }
 
  username = sessionStorage.getItem('authenticatedUser');
 
  logOut(){
 
    this.login.logOut();
 
  }
 
}