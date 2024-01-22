import { TestBed } from '@angular/core/testing';

import { AuthGuardadmin } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuardadmin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuardadmin);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});