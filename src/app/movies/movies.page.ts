import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage {
  
  myMovies:any[]=[];
  constructor(private service:MovieService) {}
  
  ionViewWillEnter()
  {
    this.service.GetMovieData().subscribe(
      (data)=>{
        this.myMovies = data.Search;
      }
    );
  }

}
