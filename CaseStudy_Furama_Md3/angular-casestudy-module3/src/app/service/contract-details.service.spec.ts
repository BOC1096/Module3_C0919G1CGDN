import { TestBed } from '@angular/core/testing';

import { ContractDetailsService } from './contract-details.service';

describe('ContractDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContractDetailsService = TestBed.get(ContractDetailsService);
    expect(service).toBeTruthy();
  });
});
