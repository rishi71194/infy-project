/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BonuspenaltyService } from './bonuspenalty.service';

describe('Service: Bonuspenalty', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BonuspenaltyService]
    });
  });

  it('should ...', inject([BonuspenaltyService], (service: BonuspenaltyService) => {
    expect(service).toBeTruthy();
  }));
});
