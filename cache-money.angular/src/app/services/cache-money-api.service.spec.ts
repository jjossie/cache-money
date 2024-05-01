import { TestBed } from '@angular/core/testing';

import { CacheMoneyApiService } from './cache-money-api.service';

describe('CacheMoneyApiService', () => {
  let service: CacheMoneyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheMoneyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
