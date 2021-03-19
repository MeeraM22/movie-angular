import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies:movie[];
  constructor(private movieService:MovieService) {}
 
    ngOnInit(): void {
      this.movieService.getAllMovies().subscribe(res =>{
        this.movies = res;
      })
    }
  
}


  