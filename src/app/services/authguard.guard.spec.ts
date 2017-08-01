import { TestBed, async, inject } from '@angular/core/testing';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service';

describe('AuthguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [AuthguardGuard, UserService]
    });
  });

  it('should ...', inject([AuthguardGuard], (guard: AuthguardGuard) => {
    expect (guard).toBeTruthy();
  }));
});
