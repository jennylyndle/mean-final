/*
import { Injectable } from '@angular/core';
import {Character } from '../classes/character';
import {CHARACTERS } from '../classes/data-characters';

@Injectable()
export class CahractersService {

  constructor() { }
  getCharacters() : Promise <Character []> {
    return Promise.resolve(CHARACTERS);
  }


}
*/


import { Injectable } from '@angular/core';
import {Character } from '../classes/character'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CahractersService {

  constructor(private http: Http) { }

  getCharacters() : Observable<Character[]> {
    //return Promise.resolve(CHARACTERS);
    return this.http.get('http://localhost:8085/api/characters')
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
}


