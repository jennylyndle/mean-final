import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CharactersListComponent} from "./components/characters-list/characters-list.component"
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component"

const routes: Routes = [
  {path: 'characters' , component: CharactersListComponent},
  {path: '' , redirectTo: '/characters',pathMatch : 'full'},
  {path: '**' , component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


