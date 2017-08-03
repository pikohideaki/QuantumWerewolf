import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { MyUtilitiesService } from '../my-utilities.service';
import { GameGroup } from './game-group';

@Injectable()
export class GameGroupsService {

  private gameGroupsSource = new BehaviorSubject< GameGroup[] >([]);
  public gameGroups$ = this.gameGroupsSource.asObservable();
  private gameGroups: GameGroup[] = [];

  constructor(
    private utils: MyUtilitiesService,
  ) {
    this.gameGroups$.subscribe( val => this.gameGroups = val );
    // this.mySyncGroup.selectedCards$().subscribe( val => {
    //   if ( !val ) return;
    //   this.selectedCardsSource.next( val );
    // });
  }

  changeGameGroups( newGameGroups: GameGroup[] ) {
    this.gameGroupsSource.next( newGameGroups );
    // this.mySyncGroup.setSelectedCards( newSelectedCards );
  }

  addGameGroup( newGameGroup: GameGroup ) {
    this.gameGroups.push( newGameGroup );
    this.changeGameGroups( this.gameGroups );
  }

  removeGameGroup( index: number ) {
    this.utils.removeAt( this.gameGroups, index );
    this.changeGameGroups( this.gameGroups );
  }
}
