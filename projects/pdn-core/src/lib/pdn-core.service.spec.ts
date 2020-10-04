import { TestBed } from '@angular/core/testing';

import { PdnCoreService } from './pdn-core.service';

describe('PdnCoreService', () => {
  let service: PdnCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdnCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
