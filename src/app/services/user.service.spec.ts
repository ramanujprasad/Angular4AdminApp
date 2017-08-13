import { TestBed, inject } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it(`should test the userService service`, inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
