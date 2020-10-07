import { TestBed } from '@angular/core/testing';

import { RegionsDataService } from './regions-data.service';

describe('RegionsDataService', () => {
  let service: RegionsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
