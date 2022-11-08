import { TestBed } from '@angular/core/testing';

import { GetuserslistserviceService } from './getuserslistservice.service';

describe('GetuserslistserviceService', () => {
  let service: GetuserslistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetuserslistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
