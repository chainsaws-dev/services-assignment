import { TestBed } from '@angular/core/testing';

import { UserSwitchCounterService } from './user-switch-counter.service';

describe('UserSwitchCounterService', () => {
  let service: UserSwitchCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSwitchCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
