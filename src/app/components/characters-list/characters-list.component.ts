import { Component, OnInit } from '@angular/core';
import { Character } from '../../classes/character';
import { CahractersService } from '../../services/cahracters.service'; // Make sure this name is the same as the one which is exported from the class..
@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers : [CahractersService]
})
export class CharactersListComponent implements OnInit {

  characters : Character [];

  constructor(private characterService: CahractersService) { }

 /* getCharacters():void{
   // this.characterService.getCharacters().then(characters => this.characters = characters);


  }*/
  getCharacters():void{
    // this.characters = this.characterService.getCharacters().then(characters =>  = characters);
    this.characterService.getCharacters().subscribe(
      characters => this.characters = characters,
      err => console.log(err)
    )

  }


  ngOnInit() {
    this.getCharacters();

  }

}
