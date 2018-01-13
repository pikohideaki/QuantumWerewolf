import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MdTooltipModule, MdDialog, MdSnackBar } from '@angular/material';

import { MyUtilitiesService } from '../../../my-utilities.service';

import { GameGroup } from '../../game-group';
import { GameGroupsService } from '../../game-groups.service';
import { SignInGroupDialogComponent } from '../sign-in-group-dialog/sign-in-group-dialog.component';


@Component({
  selector: 'app-add-game-group',
  templateUrl: './add-game-group.component.html',
  styleUrls: [
    '../../../my-data-table/my-data-table.component.css',
    './add-game-group.component.css'
  ]
})
export class AddGameGroupComponent implements OnInit, OnDestroy {
  private alive: boolean = true;

  newGroup: GameGroup = new GameGroup();
  newPlayerName: string;

  description1 = `裁判の投票数を非表示にします。
    このモードをオンにする場合は、投票時も端末を手渡しして行ってください。
    誰が誰を投票したのかわからない状態でゲームが進行しますので、やや人狼チームが有利になります。`;

  description2 = `確率表の人間の部分を占い師である確率と村人である確率に分けて表示します。`;

  description3 = `8人以上なら2匹、13人以上なら3匹が目安です。`;


  constructor(
    private utils: MyUtilitiesService,
    private gameGroupsService: GameGroupsService,
    public snackBar: MdSnackBar,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive = false;
  }


  setPlayerName( index: number, name: string ) {
    this.newGroup.members[index] = name;
  }

  addPlayer() {
    if ( !this.newPlayerName ) return;
    this.newGroup.members.push( this.newPlayerName );
    this.newPlayerName = undefined;
  }

  shufflePlayers() {
    this.newGroup.members = this.utils.shuffle( this.newGroup.members );
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

  increment() { this.newGroup.numberOfWerewolves++; }
  decrement() { this.newGroup.numberOfWerewolves--; }

  newGameFormIsValid(): boolean {
    return ( this.newGroup.name && this.newGroup.password && this.newGroup.members.length >= 4 );
  }

  newGame() {
    // if ( !this.newGameFormIsValid() ) return;
    // this.gameGroups.addGameGroup( this.newGroup );
    // this.router.navigate( ['/quantum-werewolf-game-main', this.newGroup.id] );
    const dialogRef = this.dialog.open( SignInGroupDialogComponent, { data: this.newGroup } );
    dialogRef.afterClosed().subscribe( result => {
      if ( result === 'OK Clicked' ) {
        this.gameGroupsService.addGameGroup( this.newGroup );
        this.openSnackBar('Successfully signed in!');
      }
    });
  }


  private openSnackBar( message: string ) {
    this.snackBar.open( message, undefined, { duration: 3000 } );
  }
}
