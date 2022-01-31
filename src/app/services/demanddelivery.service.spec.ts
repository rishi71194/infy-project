/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DemanddeliveryService } from './demanddelivery.service';

describe('Service: Demanddelivery', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemanddeliveryService]
    });
  });

  it('should ...', inject([DemanddeliveryService], (service: DemanddeliveryService) => {
    expect(service).toBeTruthy();
  }));
});
