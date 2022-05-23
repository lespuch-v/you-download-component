import { TestBed } from '@angular/core/testing';

import { MyServiceDataService } from './my-service-data.service';

describe('MyServiceDataService', () => {
  let service: MyServiceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServiceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
