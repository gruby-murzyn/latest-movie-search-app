import { Component, OnInit} from '@angular/core';
import {MoviesService} from '../services/movies.service';
import { RouterModule, Routes } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {
  movie:Object;
  
  constructor(private router:ActivatedRoute, private moviesService: MoviesService){}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      this.moviesService.getMovie(id).subscribe(movie => {
          console.log(movie);
          this.movie = movie;
      })
    })
  }
}
      
