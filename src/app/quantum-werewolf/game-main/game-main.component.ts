import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Rx';


import { MyUtilitiesService } from '../../my-utilities.service';

import { GameGroup } from '../game-group';
import { GameGroupsService } from '../game-groups.service';

@Component({
  selector: 'app-game-main',
  templateUrl: './game-main.component.html',
  styleUrls: ['./game-main.component.css']
})
export class GameMainComponent implements OnInit, OnDestroy {
  private alive: boolean = true;

  groupID$: Observable<string>;
  gameGroup$: Observable<GameGroup>;
  gameGroup: GameGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public utils: MyUtilitiesService,
    private gameGroups: GameGroupsService
  ) {

  }

  ngOnInit() {
    this.groupID$ = this.route.paramMap.switchMap( (params: ParamMap) => params.getAll('id') );

    this.gameGroup$
      = this.gameGroups.gameGroups$.combineLatest(
          this.groupID$,
          (list, id) => list.find( e => e.id === Number(id) ) )

    this.gameGroup$
      .takeWhile( () => this.alive )
      .subscribe( val => {this.gameGroup = val; console.log(val)} );
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
