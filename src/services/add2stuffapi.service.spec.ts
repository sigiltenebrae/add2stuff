import { TestBed } from '@angular/core/testing';

import { Add2stuffapiService } from './add2stuffapi.service';

describe('Add2stuffapiService', () => {
  let service: Add2stuffapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Add2stuffapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
