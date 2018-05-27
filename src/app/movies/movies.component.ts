import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';
import { FormsModule } from '@angular/forms'; 



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  popularList:Array<Object>;
  theatersList:Array<Object>;
  searchStr: string;
  searchRes: Array<Object>;
  
  constructor(private moviesService: MoviesService){
      this.moviesService.getPopular().subscribe(res => {
          this.popularList = res.results;
      });
      
      this.moviesService.getInTheaters().subscribe(res => {
          this.theatersList = res.results;
      });
  }
  
  searchMovies(){
      this.moviesService.searchMovies(this.searchStr).subscribe(res => {
          this.searchRes = res.results;
      })
  }
}