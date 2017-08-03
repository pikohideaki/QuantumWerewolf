import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMainComponent } from './game-main.component';

describe('GameMainComponent', () => {
  let component: GameMainComponent;
  let fixture: ComponentFixture<GameMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
