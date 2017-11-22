import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterComponent } from './components/character/character.component';

import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component'
import {MoviesModule} from "./modules/movies/movies.module"


import {AppRoutingModule} from "./app-routing.module";

//import {MatButtonModule, MatCheckboxModule} from "@angular/material";
import { HttpModule } from '@angular/http';
//import {MatToolbarModule} from '@angular/material';
//import {MatListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    MoviesModule,
    AppRoutingModule,
    /*MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,*/
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
