import { Component, OnInit } from '@angular/core';

import { AppListComponent } from '../app-list/app-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Apps = [
    {
      routerLink : '/quantum-werewolf',
      inService  : true,
      title      : 'Quantum Werewolf',
      subtitle   : '量子人狼 グループ作成',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
