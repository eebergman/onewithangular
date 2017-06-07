import { Component, OnInit } from '@angular/core';

import { Character, DataService } from '../../core';


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})

export class CharactersListComponent implements OnInit {
  public chars: Character[];

  constructor(private dataService: DataService) {
    this.chars = [];
  }

  ngOnInit() {
  //   this.getCharacters();
  }

  // private getCharacters() {
  //   this.dataService.fetchCharacters()
  //     .subscribe(chars => this.chars = chars);
  // }
}
