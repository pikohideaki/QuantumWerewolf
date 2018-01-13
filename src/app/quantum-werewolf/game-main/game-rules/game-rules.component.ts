import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { GameGroup } from '../../game-group';

@Component({
  selector: 'app-game-rules',
  templateUrl: './game-rules.component.html',
  styleUrls: ['./game-rules.component.css']
})
export class GameRulesComponent implements OnInit, OnDestroy {
  private alive: boolean = true;

  @Input() gameGroup$: Observable<GameGroup>;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
