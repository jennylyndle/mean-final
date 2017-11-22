import { Component, OnInit } from '@angular/core';
import {Movie } from '../../classes/movie';
import {MoviesService} from "../../services/movies.service";


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']

})
export class MoviesListComponent implements OnInit {

  movies: Movie[];


  getMovies() : void {
    this.moviesService.getMovies().then(movies => this.movies = movies); // the TS allows this nice little syntax to acheive this
  }


  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies(); // adding this method here to make sure it is called when the class initializes.

  }

}
