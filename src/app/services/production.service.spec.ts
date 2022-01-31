/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductionService } from './production.service';

describe('Service: Production', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductionService]
    });
  });

  it('should ...', inject([ProductionService], (service: ProductionService) => {
    expect(service).toBeTruthy();
  }));
});
