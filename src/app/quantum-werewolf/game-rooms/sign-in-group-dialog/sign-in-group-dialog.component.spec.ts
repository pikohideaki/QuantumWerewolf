import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInGroupDialogComponent } from './sign-in-group-dialog.component';

describe('SignInGroupDialogComponent', () => {
  let component: SignInGroupDialogComponent;
  let fixture: ComponentFixture<SignInGroupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInGroupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
