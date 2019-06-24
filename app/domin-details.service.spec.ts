import { TestBed } from '@angular/core/testing';

import { DominDetailsService } from './domin-details.service';

describe('DominDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DominDetailsService = TestBed.get(DominDetailsService);
    expect(service).toBeTruthy();
  });
});
