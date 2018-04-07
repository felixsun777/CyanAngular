import { TestBed, inject } from '@angular/core/testing';

import { VerificationService } from './verification.service';

describe('VerificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerificationService]
    });
  });

  it('should be created', inject([VerificationService], (service: VerificationService) => {
    expect(service).toBeTruthy();
  }));
});
