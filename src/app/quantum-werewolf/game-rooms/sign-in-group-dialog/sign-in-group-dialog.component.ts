import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MD_DIALOG_DATA } from '@angular/material';

import { MyUtilitiesService } from '../../../my-utilities.service';

import { GameGroup } from '../../game-group';

@Component({
  selector: 'app-sign-in-group-dialog',
  templateUrl: './sign-in-group-dialog.component.html',
  styleUrls: ['./sign-in-group-dialog.component.css']
})
export class SignInGroupDialogComponent implements OnInit {

  constructor(
    private router: Router,
    private utils: MyUtilitiesService,
    @Inject(MD_DIALOG_DATA) public newGroup: GameGroup
  ) { }

  ngOnInit() {
  }

  newGame() {
    this.router.navigate( ['/quantum-werewolf-game-main', this.newGroup.id] );
  }

}
