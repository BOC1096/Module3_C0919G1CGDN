import { TestBed } from '@angular/core/testing';

import { ServiceFuramaService } from './service-furama.service';

describe('ServiceFuramaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceFuramaService = TestBed.get(ServiceFuramaService);
    expect(service).toBeTruthy();
  });
});
