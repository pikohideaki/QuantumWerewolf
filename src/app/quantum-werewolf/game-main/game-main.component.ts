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

  gameGroupsList: GameGroup[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public utils: MyUtilitiesService,
    private gameGroups: GameGroupsService
  ) {
    this.gameGroups.gameGroups$
      .map( list => list.reverse() )
      .takeWhile( () => this.alive )
      .subscribe( val => this.gameGroupsList = val );
  }

  ngOnInit() {
    this.route.paramMap
        .switchMap( (params: ParamMap) => params.getAll('id') )
        .subscribe( id => console.log( this.gameGroupsList.find( e => e.id === Number(id) ) ) );
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
