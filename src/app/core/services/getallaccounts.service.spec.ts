import { TestBed } from '@angular/core/testing';

import { GetallaccountsService } from './getallaccounts.service';

describe('GetallaccountsService', () => {
  let service: GetallaccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetallaccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
