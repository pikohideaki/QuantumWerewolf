import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
// import { MD_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { MyUtilitiesService } from '../../my-utilities.service';

import { GameGroup } from '../game-group';
import { GameGroupsService } from '../game-groups.service';

@Component({
  // providers: [GameGroupsService],
  selector: 'app-add-group-dialog',
  templateUrl: './add-group-dialog.component.html',
  styleUrls: ['./add-group-dialog.component.css']
})
export class AddGroupDialogComponent implements OnInit, OnDestroy {
  private alive: boolean = true;

  newPlayerName: string;
  newGroup: GameGroup = new GameGroup();

  constructor(
    // @Inject( MD_DIALOG_DATA ) public groupList: GameGroup[],
    private router: Router,
    private utils: MyUtilitiesService,
    private gameGroups: GameGroupsService
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive = false;
  }


  addPlayer() {
    if ( !this.newPlayerName ) return;
    this.newGroup.members.push( this.newPlayerName );
    this.newPlayerName = undefined;
  }

  removePlayer( index: number ) {
    this.utils.removeAt( this.newGroup.members, index );
  }

  movePlayerUpward( index: number ) {
    this.utils.swap( this.newGroup.members, index - 1, index );
  }
  movePlayerDownward( index: number ) {
    this.utils.swap( this.newGroup.members, index, index + 1 );
  }

  clearNewPlayerName() {
    this.newPlayerName = undefined;
  }

  newGameFormIsValid(): boolean {
    return (this.newGroup.name && this.newGroup.password && this.newGroup.members.length === 0);
  }

  newGame() {
    // if ( !this.newGameFormIsValid() ) return;
    this.gameGroups.addGameGroup( this.newGroup );
    this.router.navigate( ['/quantum-werewolf-game-main', this.newGroup.id] );
  }


}
