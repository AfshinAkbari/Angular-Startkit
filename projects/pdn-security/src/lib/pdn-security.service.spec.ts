import { TestBed } from '@angular/core/testing';

import { PdnSecurityService } from './pdn-security.service';

describe('PdnSecurityService', () => {
  let service: PdnSecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdnSecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
