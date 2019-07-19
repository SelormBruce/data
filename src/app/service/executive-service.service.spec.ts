import { TestBed } from '@angular/core/testing';

import { ExecutiveServiceService } from './executive-service.service';

describe('ExecutiveServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExecutiveServiceService = TestBed.get(ExecutiveServiceService);
    expect(service).toBeTruthy();
  });
});
