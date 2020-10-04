import { TestBed } from '@angular/core/testing';

import { TpsCoreService } from './tps-core.service';

describe('TpsCoreService', () => {
  let service: TpsCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TpsCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
