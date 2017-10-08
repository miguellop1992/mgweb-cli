import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { StorageService } from './storage.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService,StorageService]
    });
  });

  it('should ...', inject([AuthService,StorageService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
