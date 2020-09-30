import { TestBed } from '@angular/core/testing';

import { AngularProjectService } from './angular-project.service';

describe('AngularProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularProjectService = TestBed.get(AngularProjectService);
    expect(service).toBeTruthy();
  });
});
