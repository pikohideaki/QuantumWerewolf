import { TestBed, inject } from '@angular/core/testing';

import { GameGroupsService } from './game-groups.service';

describe('GameGroupsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameGroupsService]
    });
  });

  it('should be created', inject([GameGroupsService], (service: GameGroupsService) => {
    expect(service).toBeTruthy();
  }));
});
