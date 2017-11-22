import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MoviesListComponent} from "./components/movies-list/movies-list.component";
import {MovieComponent} from "./components/movie/movie.component";

const routes: Routes = [
  {path: 'movies', component: MoviesListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
