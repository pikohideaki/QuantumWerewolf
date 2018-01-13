import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { GameGroup } from '../../game-group';

@Component({
  selector: 'app-probability-table',
  templateUrl: './probability-table.component.html',
  styleUrls: ['./probability-table.component.css']
})
export class ProbabilityTableComponent implements OnInit, OnDestroy {
  private alive: boolean = true;

  @Input() gameGroup$: Observable<GameGroup>;
  gameGroup: GameGroup;

  constructor() { }

  ngOnInit() {
    this.gameGroup$
      .takeWhile( () => this.alive )
      .subscribe( val => this.gameGroup = val );
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
