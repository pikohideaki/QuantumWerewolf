import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { NgForm } from '@angular/forms';
import { MdDialog, MdSnackBar } from '@angular/material';

import { MyUtilitiesService } from '../../my-utilities.service';

import { GameGroup } from '../game-group';
import { GameGroupsService } from '../game-groups.service';
import { AddGroupDialogComponent } from '../add-group-dialog/add-group-dialog.component';

@Component({
  // providers: [GameGroupsService],
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit, OnDestroy {
  private alive: boolean = true;

  gameGroupsList: GameGroup[] = [];

  signInPassword: string;
  showWrongPasswordAlert = false;

  constructor(
    private router: Router,
    public snackBar: MdSnackBar,
    public dialog: MdDialog,
    public utils: MyUtilitiesService,
    private gameGroups: GameGroupsService
  ) {
    this.gameGroups.gameGroups$
      .map( list => list.reverse() )
      .takeWhile( () => this.alive )
      .subscribe( val => this.gameGroupsList = val );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive = false;
  }

  private signInPasswordIsValid( groupID ): boolean {
    const isValid = ( this.signInPassword === this.gameGroupsList.find( g => g.id === groupID ).password );
    this.showWrongPasswordAlert = !isValid;
    return isValid;
  }


  private resetSignInForm() {
    this.signInPassword = undefined;
  }

  addGameGroup = async () => {
    const dialogRef = this.dialog.open( AddGroupDialogComponent );
  };


  signIn( groupID: number ) {
    if ( !this.signInPasswordIsValid( groupID ) ) return;
    this.resetSignInForm();
    this.router.navigate( ['/quantum-werewolf-game-main', groupID] );
    this.openSnackBar('Successfully signed in!');
  }

  // signOut = async ( groupID ) => {
  //   if ( !this.signInPasswordIsValid( groupID ) ) return;
  //   this.resetSignInForm();
  //   this.openSnackBar('Successfully signed out!');
  // }

  private openSnackBar( message: string ) {
    this.snackBar.open( message, undefined, { duration: 3000 } );
  }

  groupClicked( $event, index: number ) {
    this.resetSignInForm();
    this.gameGroupsList.forEach( g => g.selected = false );
    this.gameGroupsList[index].selected = !this.gameGroupsList[index].selected;  // toggle
    $event.stopPropagation();
  }

  backgroundClicked() {
    this.resetSignInForm();
    this.gameGroupsList.forEach( g => g.selected = false );
  }


}
