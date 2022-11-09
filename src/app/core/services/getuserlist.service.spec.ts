import { TestBed } from '@angular/core/testing';

import { GetuserlistService } from './getuserlist.service';

describe('GetuserlistService', () => {
  let service: GetuserlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetuserlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
